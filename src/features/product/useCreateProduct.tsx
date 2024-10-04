import { useState } from "react"
import { Product, ProductResponse } from "../../types/Type"
import axiosInstance from "../../libs/axios"

export const useCreateProduct = () => {
    const [state, setState] = useState<Omit<ProductResponse,"mutate">>({
      data: null,
      pending: false,
      error: null,
      message: "",
      status: ""
    })
    
    const mutate = async (data: Product) => {
      setState(prev => ({...prev, pending: true}))
      try {
        const response = await axiosInstance.post('/products', data)
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
    }
    return { ...state, mutate }
}