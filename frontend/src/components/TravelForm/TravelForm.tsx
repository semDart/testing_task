import React, { useEffect, useState } from "react";
import {
  getCountries,
  getCurrencies,
  getRegions,
  getTravelsTableData,
} from "../../selectors";
import {
  saveSelectedData,
  separateDataByProperty,
} from "../../reducers/travelsFormReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button, Autocomplete } from "@mui/material";
import { TextField } from "@material-ui/core";
import MultiSelector from "./components/MultiSelector/MultiSelector";
import { useStyles } from "./TravelForm.styles";

const TravelForm = () => {
  const travelsTableData = useAppSelector(getTravelsTableData);
  const regions = useAppSelector(getRegions);
  const countries = useAppSelector(getCountries);
  const currencies = useAppSelector(getCurrencies);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (travelsTableData.size) {
      dispatch(separateDataByProperty());
    }
  }, [dispatch, travelsTableData.size]);

  const handleSingleSelectorChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    if (value) {
      setSelectedRegion(value);
    } else {
      setSelectedRegion("");
    }
  };

  const handleCountriesChange = (
    _event: React.SyntheticEvent<Element, Event>,
    values: string[]
  ) => {
    setSelectedCountries(values);
  };

  const handleCurrenciesChange = (
    _event: React.SyntheticEvent<Element, Event>,
    values: string[]
  ) => {
    setSelectedCurrencies(values);
  };

  const handleResetForm = () => {
    if (
      !selectedRegion &&
      !selectedCountries.length &&
      !selectedCurrencies.length
    ) {
      return;
    }

    const userResponse = window.confirm(
      "Are you sure you want to reset all data?"
    );

    if (userResponse) {
      setSelectedRegion("");
      setSelectedCountries([]);
      setSelectedCurrencies([]);
    }
  };

  const handleSubmitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (
      selectedRegion ||
      selectedCountries.length ||
      selectedCurrencies.length
    ) {
      const selectedData = {
        selectedRegion,
        selectedCountries,
        selectedCurrencies,
      };

      dispatch(saveSelectedData(selectedData));
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.main_container}>
      <h1 className={classes.form_title}>Pick data you want to see</h1>

      <form onSubmit={handleSubmitForm} className={classes.form_container}>
        <Autocomplete
          id="region"
          disablePortal
          value={selectedRegion || null}
          options={regions.toArray() as string[]}
          onChange={handleSingleSelectorChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Region"
              placeholder="Select options"
            />
          )}
          className={classes.region_selector}
        />

        <MultiSelector
          field="country"
          labelName="Countries"
          initialValues={countries}
          selectedValues={selectedCountries}
          handleChangeSelectedValues={handleCountriesChange}
        />

        <MultiSelector
          field="currency"
          labelName="Currencies"
          initialValues={currencies}
          selectedValues={selectedCurrencies}
          handleChangeSelectedValues={handleCurrenciesChange}
        />

        <div className={classes.buttons_container}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSubmitForm}
            size="large"
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={handleResetForm}
          >
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
