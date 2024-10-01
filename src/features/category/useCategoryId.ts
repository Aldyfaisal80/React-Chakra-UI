import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";
import { State, StateCategory } from "../../types/Type";

export const useCategoryID = (id: string) => {
    const [state, setState] = useState<StateCategory>({
        data: null,
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        const fetchCategoryById = async () => {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));

            try {
                const response = await axiosInstance.get(`/categories/${id}`);
                setState({
                    data: response.data.data,
                    isLoading: false,
                    error: null,
                });
            } catch (error) {
                setState({
                    data: null,
                    isLoading: false,
                    error: error instanceof Error ? error.message : "An error occurred",
                });
            }
        };

        if (id) {
            fetchCategoryById();
        }
    }, [id]); 

    return state;
};
