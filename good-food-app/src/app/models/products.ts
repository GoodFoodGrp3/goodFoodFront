import { Categories } from "./categories";

export interface Products {
    buy_price: number,
    categories: Categories,
    product_description: string,
    product_id: number,
    product_name: string,
    quantity_in_stock: number
}
