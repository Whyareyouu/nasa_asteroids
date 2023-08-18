import {TAsteroid} from "../../../../types/TAsteroid";
import {FC, Fragment} from "react";
import {Asteroid} from "../Asteroid/Asteroid";
import {formatDate} from "../../lib/timestampToValidDate";
import {numberWithSpaces} from "../../lib/formatNumberWithSpaces";
import styles from './AsteroidsList.module.css'

interface AsteroidsListProps {
    asteroids: TAsteroid;
}

export const AsteroidsList: FC<AsteroidsListProps> = ({asteroids}) => {
    return <div className={styles.asteroidsList}>
        {Object.values(asteroids).flat().map(asteroid => {
            const {id, name, estimated_diameter, is_potentially_hazardous_asteroid, close_approach_data} = asteroid
            const {epoch_date_close_approach, miss_distance} = close_approach_data[0]
            return (
                <Fragment key={id} >
                    <Asteroid
                        name={name}
                        estimatedDiameter={Math.round(estimated_diameter.meters?.estimated_diameter_max)}
                        isPotentiallyHazardousAsteroid={is_potentially_hazardous_asteroid}
                        closeApproachDateFull={formatDate(epoch_date_close_approach)}
                        missDistance={numberWithSpaces(miss_distance.kilometers)}
                    />
                </Fragment>)
        })}
    </div>;
}
    ;
