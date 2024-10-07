export type Product = {
    id?: string;
    name: string;
    description: string;
    category_id: string;
    image: string;
    price: number;
    category: Category    
    totalPages: number;
    data : {
        Product: Product[];
        products: Product[];
    }
}

export type ProductResponse = {
    mutate: (data: Product) => Promise<void>;
    data: Product | null;
    loading: boolean;
    error: Error | null;
    message: string;
    status: string;
}

export type Category = {
    id?: string,
    name: string,
    description: string
    data: Product[]
    products: Product[]
}

export type CreateCategoryResponse = {
    createCategory: (data: Category) => Promise<void>;
    data: Category | null
    loading: boolean
    error: Error | null
    message: string
    status: string
}
