import axios from "axios"
import { Door } from "../interfaces/Door";

export const get_doors_by_cat = async (order: string, cat?: number | null): Promise<Door[]> => {
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/get_doors", { cat, order });
    return data;
}