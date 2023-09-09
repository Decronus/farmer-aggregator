<script lang="ts" setup>
import { logout } from "@/api/auth";
import { ref } from "vue";

const regModalVisibility = ref(false);
const loginModalVisibility = ref(false);

function handleLogout(): void {
    logout();
    console.log("logout");
}
</script>

<template>
    <div class="top-nav-bar">
        <div class="top-nav-bar__menu">
            <span @click="regModalVisibility = true">Регистрация</span>
            <span @click="loginModalVisibility = true">Войти</span>
            <span @click="handleLogout">Выйти</span>
            <span>О проекте</span>
            <span>Поставщики</span>
            <span>Доставка</span>
        </div>
        <div class="top-nav-bar__menu">
            <span>Сообщения</span>
            <span>Выберите город</span>
        </div>
    </div>

    <LoginModal v-if="loginModalVisibility" v-model="loginModalVisibility" />
    <RegModal v-if="regModalVisibility" v-model="regModalVisibility" />
</template>

<style lang="scss" scoped>
.top-nav-bar {
    width: 100%;
    height: 40px;
    margin-bottom: 16px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-nav-bar__menu {
    display: flex;
    align-items: center;
    gap: 32px;

    & span {
        font-size: 14px;
        font-weight: 400;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>
