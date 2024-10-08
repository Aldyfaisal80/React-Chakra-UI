import { useEffect, useState } from "react";
import axiosInstance from "../../libs/axios";
import { CategoryResponse } from "../../types/Type";

export const useCategoryID = (id: string) => {
    const [state, setState] = useState<Omit<CategoryResponse, "mutate">>({
        data: null,
        loading: false,
        error: null,
        message: "",
        status: "",
    })

    useEffect(() => {
        setState(prev => ({ ...prev, loading: true }))

        axiosInstance.get(`/categories/${id}`).then(response => {
            setState({
                data: response.data.data,
                loading: false,
                error: null,
                message: response.data.message,
                status: response.data.status
            })
        }).catch(error => {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error instanceof Error ? error : new Error("An unknown error occurred")
            }))
        })
    }, [id])

    return state;
}
