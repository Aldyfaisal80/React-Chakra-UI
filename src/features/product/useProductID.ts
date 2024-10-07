import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios"; 
import { ProductResponse } from "../../types/Type";

export const useProductID = (id: string) => {
    const [state, setState] = useState<Omit<ProductResponse, "mutate">>({
        data: null,
        loading: false,
        error: null,
        message: "",
        status: "",
    })

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))

        axiosInstance.get(`/products`, { params: { id } })
            .then(response => {
                setState({
                    data: response.data.data,
                    loading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status,
                })
            })
            .catch(error => {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: error instanceof Error ? error : new Error('An unknown error occurred'),
                }))
            })
    }, [id])

    return {
        ...state,
    }
}
