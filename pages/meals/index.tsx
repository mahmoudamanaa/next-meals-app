import SearchBar from "@/components/mealspage/SearchBar";
import classes from "./index.module.css";
import PointText from "@/components/text/PointText";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Categories from "@/components/categories/Categories";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import SingleMealCard from "@/components/mealspage/SingleMealCard";

const getCategories = async () => {
  const { data } = await axios.get("/categories.php");
  return data.categories;
};

const getMeals = async ({ queryKey }: any) => {
  const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);
  return data?.meals || [];
};

const getQueriedMeals = async ({ queryKey }: any) => {
  const { data } = await axios.get(`/search.php?s=${queryKey[1]}`);
  return data?.meals || [];
};

const MealsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");

  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(["categories"], getCategories);

  const {
    data: meals,
    isLoading: mealsIsLoading,
    isError: mealsIsError,
  } = useQuery(["mealsByCategory", selectedCategory], getMeals);

  const {
    data: searchedMeals,
    isLoading: searchedMealsIsLoading,
    isError: searchedMealsIsError,
  } = useQuery(["mealsByQuery", query], getQueriedMeals);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText.length) {
        setQuery(searchText);
        setSelectedCategory("");
      } else {
        setQuery("");
        if (categories) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);

    return () => {
      setQuery("");
      clearTimeout(timeout);
    };
  }, [searchText, categories]);

  return (
    <div className={classes.meals__page}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <PointText myClassNames={classes.text}>
        search meals or select categories from below.
      </PointText>

      <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setQuery={setQuery}
      />

      {mealsIsLoading && (
        <div className={classes.loadingSpinner}>
          <BeatLoader color="#fff" />
        </div>
      )}

      <div className={classes.meals__container}>
        {meals &&
          !mealsIsError &&
          !mealsIsLoading &&
          meals.map((meal: any) => (
            <SingleMealCard meal={meal} key={meal.idMeal} />
          ))}
        {searchedMeals &&
          !searchedMealsIsError &&
          !searchedMealsIsLoading &&
          searchText.length > 0 &&
          selectedCategory === "" &&
          searchedMeals.map((meal: any) => (
            <SingleMealCard meal={meal} key={meal.idMeal} />
          ))}
      </div>
    </div>
  );
};

export default MealsPage;
