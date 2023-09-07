import supabase from "@/supabase/supabase";

export default defineEventHandler(async (event) => {
    try {
        const productId = getRouterParam(event, "productId");
        const { data } = await supabase.from("products").delete().eq("id", productId).select();
        return data;
    } catch (err) {
        console.error(err);
    }
});
