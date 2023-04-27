import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<{
  category: any;
  selectedCategory: string;
  setSelectedCategory: (text: string) => void;
  setQuery: (text: string) => void;
}> = (props) => {
  const clickHandler = () => {
    props.setSelectedCategory(props.category.strCategory);
    props.setQuery("");
  };

  let clsx = [classes.item];
  if (props.category.strCategory === props.selectedCategory) {
    clsx.push(classes.item__selected);
  }

  return (
    <button type="button" className={clsx.join(" ")} onClick={clickHandler}>
      {props.category.strCategory}
    </button>
  );
};

export default CategoryItem;
