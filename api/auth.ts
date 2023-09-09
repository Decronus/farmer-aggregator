import { AsyncData } from "nuxt/app";

export interface CredentialsBody {
    email: string;
    password: string;
}

export function getUser() {
    return useFetch(`/api/auth/current-user`);
}

export function login(body: CredentialsBody): AsyncData<CredentialsBody, Error | null> {
    return useFetch(`/api/auth/login`, { method: "POST", body });
}

export function reg(body: CredentialsBody): AsyncData<CredentialsBody, Error | null> {
    return useFetch(`/api/auth/reg`, { method: "POST", body });
}

export function logout() {
    return useFetch(`/api/auth/logout`);
}
