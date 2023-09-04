<script lang="ts" setup>
import supabase from "@/supabase/supabase";
import { getUserProducts, getUsers, getUserById } from "@/api/users";
// import { ref, onMounted } from "vue";

// const { data, error } = await getUserById(7123123);
// if (error.value) {
//     logError(error);
// }
// console.log("data", data.value);

const { data } = await getUserProducts(8);
console.log("products", data.value);
</script>

<template>
    <div class="page-wrap main-page">
        <!-- <div class="movie-cards-container">
            <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div> -->
    </div>
</template>

<style lang="scss">
/* .movie-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(211px, 1fr));
    grid-gap: 22px;
    row-gap: 60px;
    justify-content: space-between;
} */
</style>
