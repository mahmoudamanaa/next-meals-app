import Text from "../text/Text";
import Title from "../text/Title";
import classes from "./IngredientsTable.module.css";
import React from "react";

const IngredientsTable: React.FC<{ ingredientsWithMeasure: any }> = (props) => {
  return (
    <React.Fragment>
      <Title myClassNames={classes.title} variant="primary">
        Ingredients
      </Title>
      <table className={classes.ingredientsTable}>
        <tbody>
          {props.ingredientsWithMeasure.map((value: any) => (
            <tr key={value.index}>
              <td>
                <Text myClassNames="">{value.ingredient}</Text>
              </td>
              <td>
                <Text myClassNames="">{value.measure}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default IngredientsTable;
