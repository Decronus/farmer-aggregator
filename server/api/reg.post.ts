import supabase from "@/supabase/supabase";
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { createErrorHandler } from "../../utils/functions";

export default defineEventHandler(async (event) => {
    const body: SignUpWithPasswordCredentials = await readBody(event);
    const { data, error } = await supabase.auth.signUp(body);
    if (error) createErrorHandler(error.status as number, error.message);
    return data;
});
