import { useEffect, useState } from "react";
import { getSingleMeal } from "./meals/[id]";
import { useQueries } from "@tanstack/react-query";
import classes from "./savedmeals.module.css";
import Title from "@/components/text/Title";
import Text from "@/components/text/Text";
import { BeatLoader } from "react-spinners";
import Link from "next/link";
import PointText from "@/components/text/PointText";

const SavedMeals = () => {
  const [savedMealsId, setSavedMealsId] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("savedMeals")) {
      setSavedMealsId(JSON.parse(localStorage.getItem("savedMeals") || "{}"));
    }
  }, []);

  const queries = savedMealsId.map((id) => ({
    queryKey: ["singleMeal", id],
    queryFn: getSingleMeal,
  }));

  const result = useQueries({ queries });

  return (
    <div className={classes.pageWrapper}>
      <Title variant="primary" myClassNames={classes.pageTitle}>
        My Saved Meal List
      </Title>
      <div className={classes.list_container}>
        {!(savedMealsId.length > 0) && (
          <Text myClassNames="">You have no saved meals.</Text>
        )}
        {result &&
          result.map(({ data, isLoading }, index) => {
            if (isLoading) {
              return <BeatLoader color="#fff" key={savedMealsId[index]} />;
            }
            return (
              <Link
                href={`/meals/${data.idMeal}`}
                key={data.idMeal}
                className={classes.singleMeal}
              >
                <Title variant="secondary" myClassNames={classes.mealTitle}>
                  {data.strMeal}
                </Title>
                <PointText myClassNames="">Category: {data.strCategory}</PointText>
                <PointText myClassNames="">Area: {data.strArea}</PointText>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SavedMeals;
