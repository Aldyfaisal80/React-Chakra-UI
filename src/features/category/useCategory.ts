import { useEffect, useState } from "react";
import { StateCategory, type Categories, type State } from "../../types/Type";
import axiosInstance from "../../libs/axios";

export const useCategory = (limit: number, page: number) => {
    const [state, setState] = useState<StateCategory>({
        data: [] as Categories[],
        isLoading: true,
        error: null,
        totalPages: 1,
    });

    useEffect(() => {
        const fetchCategories = async () => {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));

            try {
                const response = await axiosInstance.get(`/categories`, {
                    params: { limit, page },
                });

                setState({
                    data: response.data.data.categories, 
                    isLoading: false,
                    error: null,
                    totalPages: Math.ceil(response.data.data.total / limit),
                });
            } catch (error) {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    error: error instanceof Error ? error.message : "An error occurred",
                    totalPages: 1,  error
                }));
            }
        };

        fetchCategories();
    }, [limit, page]); 

    return state;
};
