import { useState } from "react";
import Swal from 'sweetalert2';
import { Product, ProductResponse } from "../../types/Type";
import axiosInstance from "../../libs/axios";

export const useDeleteProduct = (): ProductResponse => {
  const [state, setState] = useState<Omit<ProductResponse, 'mutate'>>({
    data: null,
    loading: false,
    error: null,
    message: '',
    status: ''
  });

  const mutate = async (id: Product) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });
  
    if (result.isConfirmed) {
      setState(prev => ({ ...prev, loading: true }));
      try {
        const response = await axiosInstance.delete(`/products/${id}`);
        setState({
          data: response.data.data,
          loading: false,
          error: null,
          message: response.data.message,
          status: response.data.status,
        });
  
        await Swal.fire({
          title: 'Deleted!',
          text: 'Your product has been deleted.',
          icon: 'success',
        });
        window.location.reload();
      } catch (err) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err : new Error("An error occurred while deleting the product"),
        }));
        
        await Swal.fire({
          title: 'Oops...',
          text: err instanceof Error ? err.message : 'Something went wrong!',
          icon: 'error',
        });
      }
    }
  };
  

  return {
    ...state,
    mutate,
  };
};