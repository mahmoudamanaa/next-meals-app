import Link from "next/link";
import classes from "./Button.module.css";
import React from "react";

const ButtonWithLink: React.FC<{
  children: string;
  link: string;
  variant: string;
}> = (props) => {
  let clsx = [];
  if (props.variant === "primary") {
    clsx = [classes.button, classes["variant__primary"]];
  } else {
    clsx = [classes.button, classes["variant__secondary"]];
  }

  return (
    <Link href={props.link} className={clsx.join(" ")}>
      {props.children}
    </Link>
  );
};

const Button: React.FC<{ children: any; variant: string }> = (props) => {
  let clsx = [];
  if (props.variant === "primary") {
    clsx = [classes.button, classes["variant__primary"]];
  } else {
    clsx = [classes.button, classes["variant__secondary"]];
  }

  return <button className={clsx.join(" ")}>{props.children}</button>;
};

export { Button };

export default ButtonWithLink;
