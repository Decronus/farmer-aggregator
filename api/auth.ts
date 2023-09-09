import { AsyncData } from "nuxt/app";

export interface CredentialsBody {
    email: string;
    password: string;
}

export function login(body: CredentialsBody): AsyncData<CredentialsBody, Error | null> {
    return useFetch(`/api/login`, { method: "POST", body });
}

export function reg(body: CredentialsBody): AsyncData<CredentialsBody, Error | null> {
    return useFetch(`/api/reg`, { method: "POST", body });
}
