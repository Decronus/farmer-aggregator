import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async (event) => {
    const { error } = await supabase.auth.signOut();
    if (error) createErrorHandler(error.status as number, error.message);
    setCookie(event, "access_token", "");
    setCookie(event, "refresh_token", "");
    return "User are logged out";
});
