import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async (event) => {
    const userId = getRouterParam(event, "user_id");
    try {
        const { data } = await supabase.from("users").select("id, name, phone").eq("id", userId);
        if (!data?.length) return createErrorHandler(404, "Пользователь с указанным id не существует");
        return data && data[0];
    } catch (err) {
        console.error(err);
    }
});
