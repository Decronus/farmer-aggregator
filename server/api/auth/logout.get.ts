import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) createErrorHandler(error.status as number, error.message);
    return "User are logged out";
});
