<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
</script>

<template>
    <input class="custom-input" placeholder="Поиск по сайту" />
</template>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.custom-input {
    height: 50px;
    width: 100%;
    border: 2px solid $greenBorder !important;
    border-radius: 10px;
    padding: 0 16px;
    outline: none;

    &::placeholder {
        font-size: 14px;
        color: #b7b7b7;
    }
}
</style>
