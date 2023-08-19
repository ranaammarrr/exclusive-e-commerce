import React from "react";
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox'
import OutlinedInput from '@mui/material/OutlinedInput';
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@mui/material";


const CategorySelect = ({ categories, selectedCategories, onChange, width }) => {
  return (
    <FormControl style={{ width: width }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "black",
          },
        },
      }}
    >
      <InputLabel style={{ color: "black" }}>Categories</InputLabel>
      <Select
        multiple
        value={selectedCategories}
        onChange={(event) => onChange(event.target.value)}
        input={<OutlinedInput label="Categories" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            <Checkbox
              sx={{
                [`&, &.${checkboxClasses.checked}`]: {
                  color: 'black',
                },
              }}
              checked={selectedCategories.includes(category)}
              onChange={() => onChange(category)}
            />
            <label htmlFor={category}>{category}</label>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategorySelect;


        // {categories.map((category) => (
        //   <FormControlLabel
        //     key={category}
        //     control={
        //       <Checkbox
        //         checked={selectedCategories.includes(category)}
        //         onChange={() => onChange(category)}
        //       />
        //     }