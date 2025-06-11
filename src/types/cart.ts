export interface CartItem {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    img?: string;
    topping?: string[];
}
