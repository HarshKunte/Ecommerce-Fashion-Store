import { ButtonHTMLAttributes, FC } from 'react';
import './button.styles.scss';

export enum BUTTON_TYPE_CLASSES {
  base= 'base',
  google= 'google-sign-in',
  inverted= 'inverted',
};

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<ButtonProps> = ({ children, buttonType = BUTTON_TYPE_CLASSES.base , ...otherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType as keyof typeof BUTTON_TYPE_CLASSES]}`}
      {...otherProps}>
      {children}
    </button>
  );
};

export default Button;