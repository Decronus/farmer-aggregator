import supabase from "@/supabase/supabase";

export default defineEventHandler(async (event) => {
    const { data } = await supabase.from("users").select();
    return data;
});
