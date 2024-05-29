import { useQuery } from "@tanstack/react-query";
import styles from "./doors.module.scss";
import { DoorsHeader } from "./DoorsHeader/DoorsHeader";
import { get_doors } from "../../api/get-doors";
import { useState } from "react";
import { DoorsItem } from "./DoorsItem/DoorsItem";
import { Loader } from "../Loader/Loader";
import { get_doors_by_cat } from "../../api/get-doors-by-cat";

export const Doors = ({ id, byCat }: { id: number, byCat?: boolean }) => {
    const [sorting, setSorting] = useState<string>("ASC");
    const doorsQuery = useQuery({
        queryKey: ["get_doors", sorting, id],
        queryFn: () => byCat ? get_doors_by_cat(sorting, id) : get_doors(sorting, id)
    });
    const changeSorting = (order: string) => {
        setSorting(order);
    }
    return (<>
        <DoorsHeader callback={changeSorting} />
        <div className={styles.grid}>
            {doorsQuery.data && doorsQuery.data.map((x, k) => <DoorsItem data={x} key={k} />)}
        </div>
        {doorsQuery.isLoading && <Loader />}
    </>);
}