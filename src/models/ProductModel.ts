interface IProductData {
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: Array<string>;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export type {
    IProductData
}