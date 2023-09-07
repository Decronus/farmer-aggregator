import supabase from "@/supabase/supabase";
import { ProductBody } from "../../../../api/users";
import { createErrorHandler } from "../../../../utils/functions";

export default defineEventHandler(async (event) => {
    try {
        const userId = getRouterParam(event, "userId");
        const body: ProductBody = await readBody(event);
        const { name, price } = body;
        if (!(name && price)) return createErrorHandler(404, "Неправильное или пустое тело запроса");

        const product = { ...body, userId };
        const { data } = await supabase.from("products").insert(product).select();
        return data;
    } catch (err) {
        console.error(err);
    }
});
