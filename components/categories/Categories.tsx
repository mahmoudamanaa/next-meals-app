import React from "react";
import classes from "./Categories.module.css";
import { BeatLoader } from "react-spinners";
import CategoryItem from "./CategoryItem";

const Categories: React.FC<{
  categories: [];
  categoriesIsLoading: boolean;
  categoriesIsError: boolean;
  selectedCategory: string;
  setSelectedCategory: (text: string) => void;
  setQuery: (text: string) => void;
}> = (props) => {
  return (
    <div className={classes.categories__container}>
      {props.categoriesIsLoading && !props.categoriesIsError && (
        <BeatLoader color="#fff" />
      )}
      {!props.categoriesIsLoading && props.categoriesIsError && <p>Error</p>}
      {props.categories &&
        !props.categoriesIsError &&
        props.categories.map((item: { idCategory: number }) => (
          <CategoryItem
            category={item}
            key={item.idCategory}
            selectedCategory={props.selectedCategory}
            setSelectedCategory={props.setSelectedCategory}
            setQuery={props.setQuery}
          />
        ))}
    </div>
  );
};

export default Categories;
