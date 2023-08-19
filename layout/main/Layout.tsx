import { FC, FunctionComponent, ReactNode } from "react";
import styles from "./Layout.module.css";
import Image from "next/image";
import EarthImage from "../../assets/images/Earth.png";
interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.corporation}>
        <h1 className={styles.title}>ARMAGEDDON 2023</h1>
        <p>
          ООО “Команда им. Б. Уиллиса”. <br />
          Взрываем астероиды с 1998 года.
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={EarthImage} alt="Earth" className={styles.image} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
