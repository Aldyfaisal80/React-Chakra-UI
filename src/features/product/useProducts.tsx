import { useEffect, useState } from "react"
import axiosIntance from "../../libs/axios"
import { State, type Products } from "../../types/Type"
export const useProducts = (limit: number, page: number) => {
    const [state, setState] = useState<State>({
        data: [] as Products[],
        isLoading: true,
        error: null,
        totalPages: 1,
    });

    useEffect(() => {
        const fetchProducts = async () => {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));

            try {
                const response = await axiosIntance.get(`/products`, {
                    params: { limit, page },
                });
                setState({
                    data: response.data.data.products,
                    isLoading: false,
                    error: null,
                    totalPages: Math.ceil(response.data.data.total / limit),
                });
            } catch (error) {
                setState((prev) => ({
                    ...prev,
                    isLoading: false,
                    error: error instanceof Error ? error.message : "An error occurred",
                    totalPages: 1,
                }));
            }
        };
        fetchProducts();
    }, [limit, page,]);
    return state
}