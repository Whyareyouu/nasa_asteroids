import styles from "./Asteroid.module.css";
import {AsteroidImage, AsteroidImageSize,} from "../AsteroidImage/AsteroidImage";
import {Button, ButtonTheme} from "../../../Button/Button";
import {FC} from "react";
import {DistanceLine} from "../DistanceLine/DistanceLine";

interface AsteroidProps {
    name: string;
    estimatedDiameter: number;
    isPotentiallyHazardousAsteroid: boolean;
    closeApproachDateFull: string;
    missDistance: string;
}

export const Asteroid: FC<AsteroidProps> = (props) => {
    const {
        name,
        estimatedDiameter,
        isPotentiallyHazardousAsteroid,
        closeApproachDateFull,
        missDistance,
    } = props;
    return (
        <div className={styles.wrapper}>
            <p className={styles.date}>{closeApproachDateFull}</p>
            <div className={styles.content}>
                <DistanceLine distance={missDistance}/>
                <div className={styles.info}>
                    <AsteroidImage size={estimatedDiameter > 100 ? AsteroidImageSize.BIG : AsteroidImageSize.SMALL}/>
                    <div className={styles.sizes}>
                        <p className={styles.name}>{name.replaceAll(/^[^(]*\(|\)$/g, "")}</p>
                        <p>Ø {estimatedDiameter} м</p>
                    </div>
                </div>
            </div>
            <div className={styles.additional}>
                <Button theme={ButtonTheme.SECONDARY}>Заказать</Button>
                {
                    isPotentiallyHazardousAsteroid &&
                    <p className={styles.warring}>
                    <span className={styles.warning__icon}>⚠</span>
                    Опасен
                    {isPotentiallyHazardousAsteroid}
                </p>
                }
            </div>
        </div>
    );
};
