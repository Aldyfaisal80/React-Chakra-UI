import { useEffect, useState } from "react"; 
import { Product } from "../../types/Type";
import axiosInstance from "../../libs/axios";

interface ProductState {
    data: {
        products: Product[] | null; 
        total: number; 
        totalPages: number; 
        page: number; 
        data:{
            products: Product[] | null;
        }
    } | null; 
    isLoading: boolean; 
    error: Error | null; 
    message: string; 
    status: string; 
}

export const useProducts = (limit: number, page: number): ProductState => {
    const [state, setState] = useState<ProductState>({
        data: null, 
        isLoading: false, 
        error: null, 
        message: '', 
        status: '' 
    });

    useEffect(() => {
        const fetchProducts = async () => {
            setState(prev => ({ ...prev, isLoading: true }));
            try {
                const response = await axiosInstance.get(`/products`, {
                    params: { limit, page }
                });
                const totalPages = Math.ceil(response.data.data.total / limit);
                setState({
                    data: { ...response.data, totalPages },
                    isLoading: false,
                    error: null,
                    message: response.data.message,
                    status: response.data.status
                });
            } catch (err) {
                setState(prev => ({
                    ...prev,
                    isLoading: false,
                    error: err instanceof Error ? err : new Error('An error occurred while fetching products'),
                }));
            }
        };

        fetchProducts();
    }, [limit, page]);

    return state;
};