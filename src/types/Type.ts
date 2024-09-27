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
    categories: Categories[]
}

export type State = {
    data: Products[];
    isLoading: boolean;
    error: string | null;
    totalPages?: number;
}

export type Categories = {
    id?: string,
    name: string,
    description: string
    products: Products[]
}