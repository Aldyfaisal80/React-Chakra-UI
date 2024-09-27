import { useEffect, useState } from "react"
import axiosIntance from "../../libs/axios"
import { State, type Products } from "../../types/Type"
export const useProductID = (id: string) => {
    const [state, setState] = useState<State>({
        data: [] as Products[],
        isLoading: true,
        error: null,
    });

    useEffect(() => {
        const fetchProductsId = async () => {
            setState((prev) => ({ ...prev, isLoading: true, error: null }));

            try {
                const response = await axiosIntance.get(`/products`, {
                    params: { id },
                });
                setState({
                    data: response.data.data.products,
                    isLoading: false,
                    error: null,
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
        fetchProductsId();
    }, [id]);
    return state
}