import supabase from "@/supabase/supabase";

export default defineEventHandler(async (event) => {
    try {
        const id = getRouterParam(event, "userId");
        const { data } = await supabase.from("products").select().eq("userId", id);
        return data;
    } catch (err) {
        console.error(err);
    }
});
