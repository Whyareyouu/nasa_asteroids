import styles from "./Button.module.css";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
}

export enum ButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const Button: FC<ButtonProps> = (props) => {
  const { onClick, children, className, theme = ButtonTheme.PRIMARY } = props;
  return (
    <button
      className={`${styles.Button} ${styles[theme]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
