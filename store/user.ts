import { defineStore } from "pinia";

interface UserState {
    id?: number;
    name?: string;
    email?: string;
}

export const useUserStore = defineStore("user", {
    state: (): UserState => ({
        id: 1,
        name: undefined,
        email: undefined,
    }),

    getters: {
        doubleCount: (state): number | undefined => (state?.id ? state.id * 2 : undefined),
    },

    actions: {
        increment() {
            this.id && this.id++;
        },
    },
});
