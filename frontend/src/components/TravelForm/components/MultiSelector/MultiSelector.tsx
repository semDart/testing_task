import React, { useMemo } from "react";
import { List } from "immutable";
import { Autocomplete } from "@mui/material";
import { TextField } from "@material-ui/core";
import { useStyles } from "./MultiSelector.styles";

type MultiSelectorProps = {
  field: string;
  labelName: string;
  options: List<string>;
  selectedValues: string[];
  handleChangeSelectedValues: (
    event: React.SyntheticEvent<Element, Event>,
    values: string[]
  ) => void;
};

const MultiSelector = (props: MultiSelectorProps) => {
  const {
    field,
    labelName,
    options,
    selectedValues,
    handleChangeSelectedValues,
  } = props;

  const memoizedOptions = useMemo(() => options.toArray(), [options]);

  const classes = useStyles();

  return (
    <Autocomplete
      multiple
      id={field}
      value={selectedValues}
      options={memoizedOptions}
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
