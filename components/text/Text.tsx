import React from "react";
import classes from "./Text.module.css";

const Text: React.FC<{ children: any; myClassNames: string }> = (props) => {
  let clsx = [classes.text, props.myClassNames];

  return <p className={clsx.join(" ")}>{props.children}</p>;
};

export default Text;
