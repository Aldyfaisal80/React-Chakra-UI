export type Product = {
    id?: string;
    name: string;
    description: string;
    category_id: string;
    image: string;
    price: number;
}

export type ProductState = {
    data: {
        products: Product[];
        total: number;
        totalPages: number;
        page: number;
    } | null;
    pending: boolean;
    error: Error | null;
    message: string;
    status: string;
    mutate: (data: Product) => Promise<void>;
}

export type CreateProductResponse = {
    createProduct: (data: Product) => Promise<void>;
    data: Product | null
    loading: boolean
    error: Error | null
    message: string
    status: string
}

export type Category = {
    id?: string,
    name: string,
    description: string
    data: Product[]
}

export type CreateCategoryResponse = {
    createCategory: (data: Category) => Promise<void>;
    data: Category | null
    loading: boolean
    error: Error | null
    message: string
    status: string
}
