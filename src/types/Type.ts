export type Products = {
    id?: string;
    name: string;
    price: number;
    image: string;
    isLoading: boolean;
    error: string | null;
    totalPages: number;
    category_id: string;
    description: string;
    categories: Category[]
    category: Category;
    data: Products[]
}

export type ProductState = {
    data: {
        products: Products[];
        total: number;
        totalPages: number;
        page: number;
    } | null;
    loading: boolean;
    error: Error | null;
    message: string;
    status: string;
}

export type CreateProductResponse = {
    createProduct: (data: Products) => Promise<void>;
    data: Products | null
    loading: boolean
    error: Error | null
    message: string
    status: string
}

export type Category = {
    id?: string,
    name: string,
    description: string
    data: Products[]
}

export type State = {
    data: Products |Products[] ;
    isLoading: boolean;
    error: string | null;
    totalPages?: number;
    
}

export type CreateCategoryResponse = {
    createCategory: (data: Category) => Promise<void>;
    data: Category | null
    loading: boolean
    error: Error | null
    message: string
    status: string
}
