import supabase from "@/supabase/supabase";
import { createErrorHandler } from "../../../utils/functions";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "userId");
    try {
        const { data } = await supabase.from("users").select("id, name, phone").eq("id", id);
        if (!data?.length) return createErrorHandler(404, "Пользователь с указанным id не существует");
        return data && data[0];
    } catch (err) {
        console.error(err);
    }
});
