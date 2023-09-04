export default defineEventHandler((event) => {
    const id = getRouterParam(event, "userId");
    return ["cherry", "watermelod", "lime", id];
});
