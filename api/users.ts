import { AsyncData } from "nuxt/app";

export interface Product {
    id: number;
    userId: number;
    name: string;
    price: string;
}

export interface ProductBody {
    name: string;
    price: string;
}

export function getUsers() {
    return useFetch(`/api/users`);
}

export function getUserById(userId: number) {
    return useFetch(`/api/users/${userId}`);
}

export function getUserProducts(userId: number) {
    return useFetch(`/api/users/${userId}/products`);
}

export function createProduct(userId: number, body: ProductBody): AsyncData<Product, Error | null> {
    return useFetch(`/api/users/${userId}/products`, { method: "POST", body: body });
}
