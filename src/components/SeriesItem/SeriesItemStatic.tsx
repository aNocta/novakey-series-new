import { SeriesAttributeList } from "../../interfaces/SeriesAttributeList";
import { SeriesAttributes } from "../SeriesAttributes/SeriesAttributes";
import styles from "./series-item.module.scss";

interface Props {
    title: string;
    description?: string;
    attributes: SeriesAttributeList;
}

export const SeriesItemStatic = ({ title, description, attributes }: Props) => {
    return (
        <div className={`${styles.card} ${styles.card_static}`}>
            <div className={styles.card__content}>
                <div className={styles.card__header}>
                    <div>
                        <h3>{title}</h3>
                        {description && <p className={styles.card__description}>{description}</p>}
                    </div>
                </div>
                <SeriesAttributes thickness={attributes.thickness} safety_rating={attributes.safety_rating} sound_absorption={attributes.sound_absorption} guarantee={attributes.guarantee} locking_points={attributes.locking_points} lock={attributes.lock} />
            </div>
        </div>
    );
}