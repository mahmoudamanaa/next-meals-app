import React from "react";
import classes from "./PointText.module.css";
import Text from "./Text";

const PointText: React.FC<{ myClassNames: string; children: any }> = (
  props
) => {
  let clsx = [classes.pointText, props.myClassNames];

  return (
    <div className={clsx.join(" ")}>
      <div className={classes.circle}></div>
      <Text myClassNames="">{props.children}</Text>
    </div>
  );
};

export default PointText;
