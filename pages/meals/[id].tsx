import { useRouter } from "next/router";
import classes from "./index.module.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Text from "@/components/text/Text";
import { BeatLoader } from "react-spinners";
import Image from "next/image";
import Title from "@/components/text/Title";
import PointText from "@/components/text/PointText";
import IngredientsTable from "@/components/mealspage/IngredientsTable";
import { Button } from "@/components/button/Button";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const getSingleMeal = async ({ queryKey }: any) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
};

const SingleMealPage = () => {
  const [isSaved, setIsSaved] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useQuery(
    ["singleMeal", id],
    getSingleMeal
  );

  useEffect(() => {
    if (localStorage.getItem("savedMeals")) {
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals") || "{}");
      if (savedMeals.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    }
  }, [id]);

  if (isError) {
    return <Text myClassNames="">Error</Text>;
  }

  if (isLoading || !data) {
    return <BeatLoader color="#fff" />;
  }

  const ingredients = Object.keys(data)
    .filter((key) => key.startsWith("strIngredient"))
    .filter((value) => data[value] !== "")
    .filter((value) => data[value] !== null);
  const ingredientsWithMeasure = ingredients.map((key, index) => ({
    index: index + 1,
    ingredient: data[key],
    measure: data[`strMeasure${index + 1}`],
  }));

  const saveButtonHandler = () => {
    if (localStorage.getItem("savedMeals") === null) {
      localStorage.setItem("savedMeals", JSON.stringify([data.idMeal]));
      toast.success("Meal is saved");
      setIsSaved(true);
    } else {
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals") || "{}");
      if (!isSaved) {
        savedMeals.push(data.idMeal);
        localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
        setIsSaved(true);
        toast.success("Meal is saved");
      } else {
        savedMeals.splice(savedMeals.indexOf(data.idMeal, 1));
        localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
        setIsSaved(false);
        toast.success("Meal is unsaved");
      }
    }
  };

  return (
    <div className={classes.pageWrapper}>
      <div className={classes.topContainer}>
        <div className={classes.img}>
          <Image
            src={data.strMealThumb}
            alt=""
            height={300}
            width={300}
            priority
          />
        </div>
        <div className={classes.info}>
          <Title myClassNames="" variant="primary">
            {data.strMeal}
          </Title>
          <PointText myClassNames={classes.infoText}>
            Category: {data.strCategory}
          </PointText>
          <PointText myClassNames={classes.infoText}>
            Area: {data.strArea}
          </PointText>
          <PointText myClassNames={classes.infoText}>
            Tags: {data.strTags}
          </PointText>
          <div>
            {isSaved && (
              <Text myClassNames={classes.greenText}>Item is saved</Text>
            )}
          </div>
          <div className={classes.saveButton} onClick={saveButtonHandler}>
            <Button variant="primary">
              {isSaved && <span>Unsave</span>}
              {!isSaved && <span>Save</span>}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.ingredientsTable}>
        <IngredientsTable ingredientsWithMeasure={ingredientsWithMeasure} />
      </div>
      <div className={classes.instructions}>
        <Title myClassNames="" variant="primary">
          Instructions
        </Title>
        {data.strInstructions
          .split(".")
          .filter((sentence: string) => sentence !== "")
          .map((sentence: any) => (
            <PointText myClassNames="" key={sentence}>
              {sentence}.
            </PointText>
          ))}
      </div>
    </div>
  );
};

export default SingleMealPage;
