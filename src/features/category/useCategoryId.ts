import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";
import { CreateCategoryResponse } from "../../types/Type";

export const useCategoryID = (id: string) => {
    const [state, setState] = useState<Omit<CreateCategoryResponse, "createCategory">>({
        data: null,
        loading: false,
        error: null,
        message: "",
        status: "",
    })

    useEffect(() => {
        const fetchCategoryId = async () => {
            try {
                const response = await axiosInstance.get(`/categories/${id}`);
                setState({
                    data: response.data.data,
                    loading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status
                })
            } catch (error) {
                setState(prev => ({ ...prev, loading: false, error: error instanceof Error ? error : new Error("An unknown error occurred") }))
            }
        };
        fetchCategoryId();
    }, [id]); 

    return state;
};
