import supabase from "@/supabase/supabase";

export default defineEventHandler(async (event) => {
    const refresh_token = getCookie(event, "refresh_token") as string;
    const { data, error } = await supabase.auth.refreshSession({ refresh_token });
    console.log("session data", data);
    return data;
});
