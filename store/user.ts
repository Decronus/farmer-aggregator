import { defineStore } from "pinia";
import { getUser, login } from "@/api/auth";

interface UserState {
    id?: string;
    name?: string;
    email?: string;
}

export const useUserStore = defineStore("user", {
    state: (): UserState => ({
        id: "",
        name: undefined,
        email: undefined,
    }),

    getters: {
        doubleCount: (state): number | undefined => 1,
    },

    actions: {
        async actionSetUser() {
            const { data } = await getUser();
            this.id = data.value?.identities?.[0].id;
            this.email = data.value?.email;
        },
    },
});
