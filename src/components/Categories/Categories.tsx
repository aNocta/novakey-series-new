import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import axios from "axios";
import styles from "./categories.module.scss";

export const Categories = ({ current }: { current: string }) => {
    const { data } = useQuery({
        queryKey: ["categories"],
        queryFn: async (): Promise<{ title: string, slug: string }[]> => (await axios("https://novakey.ru/wp-json/series-endpoints/series/get_categories", {})).data
    });
    return (<div className={styles.container}>
        {data && data.map((x, k) => <Link className={`${styles.link} ${x.slug == current ? styles.link_active : ""}`} to={`/category/${x.slug}`} key={k}>{x.title}</Link>)}
    </div>);
};