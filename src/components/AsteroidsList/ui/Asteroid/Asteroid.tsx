import styles from "./Asteroid.module.css";
import {
  AsteroidImage,
  AsteroidImageSize,
} from "../AsteroidImage/AsteroidImage";
import { Button, ButtonTheme } from "../../../Button/Button";

export const Asteroid = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.date}>12 сент 2023</p>
      <div className={styles.content}>
        <p>5 652 475 км</p>
        <div className={styles.info}>
          <AsteroidImage size={AsteroidImageSize.BIG} />
          <div className={styles.sizes}>
            <p className={styles.name}>2021 FQ</p>
            <p>Ø 85 м</p>
          </div>
        </div>
      </div>
      <div className={styles.additional}>
        <Button theme={ButtonTheme.SECONDARY}>Заказать</Button>
        <p className={styles.warring}>
          <span className={styles.warning__icon}>⚠</span>
          Опасен
        </p>
      </div>
    </div>
  );
};
