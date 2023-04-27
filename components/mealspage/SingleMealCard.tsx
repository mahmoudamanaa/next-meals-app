import Link from "next/link";
import classes from "./SingleMealCard.module.css";
import React from "react";
import Image from "next/image";
import Title from "../text/Title";

const SingleMealCard: React.FC<{ meal: any }> = (props) => {
  return (
    <Link href={`/meals/${props.meal.idMeal}`} className={classes.item}>
      <Image
        src={props.meal.strMealThumb}
        alt="meal"
        height="200"
        width="200"
        priority
      />
      <Title myClassNames={classes.mealTitle} variant="secondary">{props.meal.strMeal}</Title>
    </Link>
  );
};

export default SingleMealCard;
