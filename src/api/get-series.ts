import axios from "axios";
import { ISeriesItem } from "../interfaces/ISeriesItem";

export const get_series = async (location?: string): Promise<ISeriesItem[]> => {
    if (location) {
        const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/", { location });
        return data;
    }
    const { data } = await axios.post("https://novakey.ru/wp-json/series-endpoints/series/");
    return data;
};