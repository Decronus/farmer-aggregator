<script lang="ts" setup>
import { ref } from "vue";
</script>

<template>
    <div class="top-nav-bar">
        <div class="top-nav-bar__menu">
            <span>О проекте</span>
            <span>Поставщики</span>
            <span>Доставка</span>
        </div>
        <div class="top-nav-bar__menu">
            <span>Сообщения</span>
            <span>Выберите город</span>
        </div>
    </div>
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
    }
}
</style>
