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
}
</style>
