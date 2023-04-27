import classes from "./Title.module.css";
import React from "react";

const Title: React.FC<{
  children: string;
  variant: string;
  myClassNames: string;
}> = (props) => {
  let clsx = [];
  if (props.variant === "primary") {
    clsx = [classes.title, classes["title__primary"], props.myClassNames];
  } else {
    clsx = [classes.button, classes["title__secondary"], props.myClassNames];
  }

  return <h2 className={clsx.join(" ")}>{props.children}</h2>;
};

export default Title;
