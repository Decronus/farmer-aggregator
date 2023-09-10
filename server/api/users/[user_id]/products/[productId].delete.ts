import supabase from "@/supabase/supabase";

export default defineEventHandler(async (event) => {
    const productId = getRouterParam(event, "productId");
    const { data } = await supabase.from("products").delete().eq("id", productId).select();
    return data;
});
