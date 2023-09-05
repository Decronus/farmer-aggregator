// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/scss/global.scss", "~/assets/scss/variables.scss"],
    modules: ["@element-plus/nuxt"],
    components: ["~/components/ui", "~/components"],
});
