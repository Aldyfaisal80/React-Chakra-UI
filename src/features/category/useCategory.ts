import { useEffect, useState } from "react";
import { type Categories, type State } from "../../types/Type";
import axiosIntance from "../../libs/axios";

export const useCategory = (limit: number, page: number) => {
    const [state, setState] = useState<State>({
        data: [] as Categories[],
        isLoading: true,
        error: null,
        totalPages: 1,
    });
    
    useEffect(() => {
        const fetchCategories = async () => {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));
    
            try {
                const response = await axiosIntance.get(`/categories`, {
                    params: { limit, page },
                });
                setState({
                    data: response.data.data.products,
                    isLoading: false,
                    error: null,
                    totalPages: Math.ceil(response.data.data.total / limit),
                });
            } catch (error) {
                setState((prev  ) => ({
                    ...prev,
                    isLoading: false,
                    error: error instanceof Error ? error.message : "An error occurred",
                    totalPages: 1,
                }));
            }
        };
        fetchCategories();
    }, [limit, page]);
        return state
      }