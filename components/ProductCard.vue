<script lang="ts" setup>
const props = defineProps(["product"]);
</script>

<template>
    <div class="product-card">
        <div class="product-card__image"></div>
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
    aspect-ratio: 220/200;
    background-color: #f6f6f6;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 16px;
    flex-grow: 0;
    flex-shrink: 0;
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
