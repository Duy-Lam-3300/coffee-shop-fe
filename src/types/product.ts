export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    sizes: string[];
    toppings?: string[];
    image: string;
    categories: string[];
    status: boolean;
    createdAt: string;
    updatedAt: string;
}