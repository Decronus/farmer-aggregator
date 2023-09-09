import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async (event) => {
    const token = getCookie(event, "token");
    const { data, error } = await supabase.auth.getUser(token);
    if (error) createErrorHandler(error.status as number, error.message);
    return data.user;
});
