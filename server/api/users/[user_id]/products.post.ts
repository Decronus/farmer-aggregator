import supabase from "@/supabase/supabase";
import { ProductBody } from "../../../../api/users";
import { createErrorHandler } from "../../../../utils/functions";

export default defineEventHandler(async (event) => {
    try {
        const userId = getRouterParam(event, "user_id");
        const body: ProductBody = await readBody(event);
        const { name, price } = body;
        if (!(name && price)) return createErrorHandler(404, "Неправильное или пустое тело запроса");

        const product = { ...body, userId };
        const { data, error } = await supabase.from("products").insert(product).select();
        // if (error) return createErrorHandler(400, "Ошибка создания продукта");
        setResponseStatus(event, 202);
        return data;
    } catch (err) {
        console.error(err);
    }
});
