import supabase from "@/supabase/supabase";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "userId");
    const { data } = await supabase.from("users").select("id, name, phone").eq("id", id);
    return data;
});
