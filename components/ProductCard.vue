<script lang="ts" setup>
import { deleteProduct } from "@/api/users";

const props = defineProps(["product"]);

async function handleDeleteProduct(productId: number) {
    try {
        const { data } = await deleteProduct(7, productId);
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}
</script>

<template>
    <div class="product-card">
        <div class="product-card__image">
            <!-- <div class="product-card__action-bar"></div> -->
            <el-dropdown placement="bottom-end">
                <div class="product-card__actions-dropdown">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 16C10 17.1046 9.10457 18 8 18C6.89543 18 6 17.1046 6 16C6 14.8954 6.89543 14 8 14C9.10457 14 10 14.8954 10 16ZM18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14C17.1046 14 18 14.8954 18 16ZM24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleDeleteProduct(product.id)">Удалить</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <div class="product-card__text">
            <span class="product-card__name">{{ props.product.name }}</span>
            <span class="product-card__price">{{ props.product.price }}&nbsp;€</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-card {
    display: flex;
    flex-direction: column;
    gap: 8px;
    cursor: pointer;
    flex-grow: 0;
    flex-shrink: 0;

    &:hover .product-card__image {
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
    }
}
.product-card__image {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    aspect-ratio: 220/200;
    background-color: #f6f6f6;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 12px;

    /* & .product-card__action-bar {
        background: #ffffff;
        width: 100%;
        height: 38px;
        border-radius: 6px;
        backdrop-filter: blur(2px);
    } */

    & .product-card__actions-dropdown {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(3px);
        outline: none;
    }
}

.product-card__text {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.product-card__name {
    font-size: 14px;
    max-width: 211px;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 0;
    /* white-space: nowrap; */
}

.product-card__price {
    font-size: 16px;
    color: #acacac;
}
</style>
