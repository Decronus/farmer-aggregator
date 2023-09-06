<script lang="ts" setup></script>

<template>
    <div class="create-product-card">
        <div class="create-product-card__content">
            <div>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="22" width="6" height="50" fill="#DDDDDD" />
                    <rect y="28" width="6" height="50" transform="rotate(-90 0 28)" fill="#DDDDDD" />
                </svg>
            </div>
            <span class="create-product-card__text">Добавить продукт</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.create-product-card {
    width: 100%;
    aspect-ratio: 220/200;
    border-radius: 16px;
    display: flex;
    background: #f6f6f6;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.create-product-card__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
}

.create-product-card__text {
    color: #a6a6a6;
    font-size: 16px;
}
</style>
