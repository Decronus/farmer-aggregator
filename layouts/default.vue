<script lang="ts" setup>
import { getUser } from "@/api/auth";
import { useUserStore } from "@/store/user";

const store = useUserStore();

await store.actionSetUser();
const { data: userData, error } = await getUser();
console.log("user", userData.value);
console.log("user error", error);
</script>

<template>
    <div class="default-layout">
        <TopNavBar />
        <NavBar />
        <slot />
    </div>
</template>

<style lang="scss">
.default-layout {
    padding: 0 20px;
    max-width: 1480px;
    margin: 0 auto;
}
</style>
