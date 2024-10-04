import { useState } from "react";
import { Product, ProductState } from "../../types/Type";
import axiosInstance from "../../libs/axios";

export const useDeleteProduct = (): Omit<ProductState, 'mutate'> & { mutate: (data: Product) => Promise<void> } => {
  const [state, setState] = useState<Omit<ProductState, 'mutate'>>({
    data: null,
    pending: false,
    error: null,
    message: '',
    status: ''
  });

  const mutate = async (data: Product) => {
    setState(prev => ({ ...prev, pending: true }));
    try {
      const response = await axiosInstance.delete(`/products/${data.id}`);
      setState({
        data: response.data.data,
        pending: false,
        error: null,
        message: response.data.message,
        status: response.data.status,
      });
    } catch (err: any) {
      setState(prev => ({
        ...prev,
        pending: false,
        error: err.response?.data?.message || "An error occurred while deleting the product",
      }));
    }
  };

  return {
    ...state,
    mutate,
  };
};
