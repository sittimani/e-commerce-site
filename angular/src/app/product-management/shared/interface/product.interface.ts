export interface Category {
    name: string,
    url: string,
    _id: string
}

export interface Product {
    _id: string,
    name: string,
    url: string,
    price: number,
    available_stocks: number,
    category: string
}