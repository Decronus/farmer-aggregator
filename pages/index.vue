<script lang="ts" setup>
import supabase from "@/supabase/supabase";
import { getUserProducts, getUsers, getUserById } from "@/api/users";
// import { ref, onMounted } from "vue";

// const { data } = await getUserProducts(255);
const { data } = getUserById(7);
// const { data } = getUsers();
// const { data } = await useFetch("/api/hello");

console.log("data", data.value);

// const { data: supaData, error } = await supabase
//     .from("users")
//     .insert({ name: "Alex", surname: "Zotin", email: "zick3333@mail.ru", phone: "79991150041" })
//     .select();
// console.log("supadata", supaData);
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
