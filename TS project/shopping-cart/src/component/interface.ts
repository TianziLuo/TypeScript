// Interface definitions
export interface Item {
    id: number;
    image: string;
    itemName: string;
    price: number;
}

export interface CartItem {
    id: number;
    count: number;
    itemName: string;
    totalPrice: number;
}