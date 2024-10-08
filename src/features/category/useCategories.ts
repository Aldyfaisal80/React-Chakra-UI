import { useEffect, useState } from "react";
import { CategoryResponse } from "../../types/Type";
import axiosInstance from "../../libs/axios";

export const useCategories = (limit: number, page: number) => {
    const [state, setState] = useState<Omit<CategoryResponse, 'mutate'>>({
        data: null,
        loading: false,
        error: null,
        message: '',
        status: ''
    });

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }));
        axiosInstance.get(`/categories`, { params: { limit, page } }).then(response => {
            const totalPages = Math.ceil(response.data.data.total / limit);
            setState({
                data: { ...response.data, totalPages },
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status
            })
        }).catch(error => {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error instanceof Error ? error : new Error('An error occurred while fetching categories'),
            }));
        })
    }, [limit, page]);

    return state;
}
