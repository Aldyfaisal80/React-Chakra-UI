import { useState } from "react";
import { Product, ProductResponse } from "../../types/Type";
import axiosInstance from "../../libs/axios";

export const useUpdateProduct = () => {

  const [state, setState] = useState<Omit<ProductResponse, 'mutate'>>({
    data: null,
    loading: false,
    error: null,
    message: '',
    status: '',
  })

  const mutate = async (data: Product) => {
    setState(prev => ({ ...prev, loading: true }))
    try {
      const response = await axiosInstance.put(`/products/${data.id}`, data)
      setState({
        data: response.data.data,
        loading: false,
        error: null,
        message: response.data.message,
        status: response.data.status
      })
    } catch (error) {
      setState(prev => ({ ...prev, loading: false, error: error instanceof Error ? error : new Error('An unknown error occurred') }))
    }
  }

  return {
    ...state,
    mutate
  }
}