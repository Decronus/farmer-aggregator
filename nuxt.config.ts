// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ["~/assets/scss/global.scss", "~/assets/scss/variables.scss", "~/assets/scss/element-ui.scss"],
    modules: ["@element-plus/nuxt", "@pinia/nuxt"],
    components: ["~/components/ui", "~/components"],
});
