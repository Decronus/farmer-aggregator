import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../../utils/functions";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "user_id");
    const { data, error } = await supabase.from("products").select().eq("user_id", id);
    if (error) return createErrorHandler(400, error.message);
    return data;
});
