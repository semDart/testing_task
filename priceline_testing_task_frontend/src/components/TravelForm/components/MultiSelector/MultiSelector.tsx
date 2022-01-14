import React from "react";
import { IMultiSelectorProps } from "../../../../interfaces/travels.interfaces";
import { Autocomplete } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useStyles } from "./MultiSelector.styles";

const MultiSelector = (props: IMultiSelectorProps) => {
  const {
    field,
    labelName,
    initialValues,
    selectedValues,
    handleChangeSelectedValues,
  } = props;

  const classes = useStyles();

  return (
    <Autocomplete
      multiple
      id={field}
      value={selectedValues}
      options={initialValues}
      getOptionLabel={(option) => option}
      onChange={handleChangeSelectedValues}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={labelName}
          placeholder="Select options"
        />
      )}
      className={classes.multiselector_container}
    />
  );
};

export default MultiSelector;
