<script lang="ts" setup>
import supabase from "@/supabase/supabase";
import { getUserProducts, getUsers, getUserById } from "@/api/users";
import { ref, onMounted } from "vue";

// const { data, error } = await getUserById(7123123);
// if (error.value) {
//     logError(error);
// }
// console.log("data", data.value);

interface Product {
    id: number;
    userId: number;
    name: string;
    price: string;
}

const products = ref<Product[] | null>(null);
const { data } = await getUserProducts(7);
products.value = data.value;
console.log("products", data.value);
</script>

<template>
    <div class="page-wrap main-page">
        <div class="product-cards-container">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<style lang="scss">
.product-cards-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 16px;
    row-gap: 25px;
    justify-content: space-between;
    flex-wrap: wrap;
}

@media screen and (max-width: 1279.99px) {
    .product-cards-container {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media screen and (max-width: 1079.99px) {
    .product-cards-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width: 767.99px) {
    .product-cards-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 499.99px) {
    .product-cards-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
