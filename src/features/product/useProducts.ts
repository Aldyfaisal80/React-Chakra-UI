import { useEffect, useState } from "react";
import { ProductResponse } from "../../types/Type";
import axiosInstance from "../../libs/axios";

export const useProducts = (limit: number, page: number) => {
    const [state, setState] = useState<Omit<ProductResponse, "mutate">>({
        data: null,
        loading: false,
        error: null,
        message: "",
        status: "",
    });

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }));

        axiosInstance
            .get(`/products`, {
                params: { limit, page },
            })
            .then(response => {
                const totalPages = Math.ceil(response.data.data.total / limit);
                setState({
                    data: { ...response.data, totalPages },
                    loading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status,
                });
            })
            .catch(err => {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: err instanceof Error ? err : new Error('An error occurred while fetching products'),
                }));
            });
    }, [limit, page]);

    return state;
};
