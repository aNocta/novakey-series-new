import axios from "axios"
import { ISeriesItem } from "../interfaces/ISeriesItem";

export const get_series_by_prod = async (slug: string): Promise<ISeriesItem> => {
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/get_series_by_product", { slug });
    return data;
}