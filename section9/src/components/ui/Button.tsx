// import classes from './Button.module.css';

import { ButtonClickEvent } from "@shared/types/common.types";
import { PropsWithChildren } from "react";

export interface ButtonProps {
  type?: "submit" | "reset" | "button";
  className?: string;
  disabled?: boolean;
  onClick?: (event: ButtonClickEvent) => void;
  form?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      type={ props.type || 'button' }
      className={ props.className ?? '' }
      onClick={ props.onClick }
      disabled={ props.disabled ?? false }
      form={ props.form }
    >
      { props.children }
    </button>
  );
};

export default Button;
