import axios from "axios"
import { Door } from "../interfaces/Door";

export const get_doors = async (order: string, series_id?: number | null): Promise<Door[]> => {
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/get_doors", { series_id, order });
    return data;
}