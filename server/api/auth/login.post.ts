import supabase from "@/supabase/supabase";
import { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async (event) => {
    const body: SignInWithPasswordCredentials = await readBody(event);
    const { data, error } = await supabase.auth.signInWithPassword(body);
    if (error) createErrorHandler(error.status as number, error.message);
    setCookie(event, "token", data.session?.access_token as string);
    return data;
});
