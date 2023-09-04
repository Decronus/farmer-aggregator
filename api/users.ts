export function getUsers() {
    return useFetch(`/api/users`);
}

export function getUserById(userId: number) {
    return useFetch(`/api/users/${userId}`);
}

export function getUserProducts(userId: number) {
    return useFetch(`/api/users/${userId}/products`);
}
