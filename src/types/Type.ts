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
    category: Categories;
}
export type Categories = {
    id?: string,
    name: string,
    description: string
    products: Products[]
}

export type State = {
    data: Products |Products[] ;
    isLoading: boolean;
    error: string | null;
    totalPages?: number;
    
}

export type StateCategory = {
    data: Categories[];
    isLoading: boolean;
    error: string | null;
    totalPages?: number;
}
