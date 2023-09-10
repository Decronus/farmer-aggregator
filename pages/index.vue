<script lang="ts" setup>
import supabase from "@/supabase/supabase";
import { getUserProducts, getUsers, getUserById } from "@/api/users";
import { ref, onMounted } from "vue";
import { Product } from "@/api/users";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { getUser } from "@/api/auth";

const userStore = useUserStore();

const products = ref<Product[] | null>(null);
const { data } = await getUserProducts(userStore.id as string);
products.value = data.value;

const createProductModalVisibility = ref(false);
</script>

<template>
    <div class="page-wrap main-page">
        <div class="product-cards-container">
            <CreateProductCard @click="createProductModalVisibility = true" />
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>

    <CreateProductModal v-model="createProductModalVisibility" />
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
