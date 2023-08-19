import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useCartContext } from "../context/CartContext";

const Categories = () => {
  const {
    categories,
    selectedCategories,
    handleCategorySelection,
    sortProductsByTitle,
  } = useCartContext();

  const handleChange = (event) => {
    const selectedCategory = event.target.name;
    const updatedCategories = event.target.checked
      ? [...selectedCategories, selectedCategory]
      : selectedCategories.filter((category) => category !== selectedCategory);
    handleCategorySelection(updatedCategories);
  };

  return (
    <>
      {categories.map((category) => (
        <FormControlLabel
          key={category}
          control={
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={handleChange}
              name={category}
            />
          }
          label={category}
        />
      ))}
      <FormControlLabel
        control={
          <Checkbox
            disabled={!selectedCategories.length}
            onChange={sortProductsByTitle}
            name="sort"
          />
        }
        label="Sort Alphabetically"
      />
    </>
  );
};

export default Categories;
