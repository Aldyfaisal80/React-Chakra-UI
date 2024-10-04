import { useEffect, useState } from "react"
import axiosIntance from "../../libs/axios"
import { ProductResponse } from "../../types/Type"

export const useProductID = (id: string) => {
    const [state, setState] = useState<Omit<ProductResponse, "mutate">>({
        data: null,
        pending: false,
        error: null,
        message: "",
        status: "",
    })

    useEffect(() => {
        const fetchProductsId = async () => {
            try {
                const response = await axiosIntance.get(`/products`, {
                    params: { id },
                });
                setState({
                    data: response.data.data,
                    pending: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status
                })
            } catch (error) {
                setState(prev => ({ ...prev, loading: false, error: error instanceof Error ? error : new Error("An unknown error occurred") }))
            }
        };
        fetchProductsId();
    }, [id]);
    return state
}