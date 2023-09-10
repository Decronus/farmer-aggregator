import supabase from "@/supabase/supabase";

export default defineEventHandler(async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log("session data", data);
    return data;
});
