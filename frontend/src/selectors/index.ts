import { Travel } from "../models/Travel";
import { RootState } from "../store/store";

export const getTravelsTableData = (state: RootState) => {
  const parsedTravelsData = state.travelsTable.travelsData.toArray();

  return parsedTravelsData;
};

export const getModifiedTravelsData = (state: RootState) => {
  const parsedTravelsData = state.travelsTable.travelsData.toArray();

  const modifiedTravelsData = parsedTravelsData.map((location: Travel) => {
    if (!location.region) {
      return {
        ...location,
        region: "Not provided",
      };
    } else {
      return location;
    }
  });

  return modifiedTravelsData;
};

export const getRegions = (state: RootState) => state.travelsForm.regions;

export const getCountries = (state: RootState) => state.travelsForm.countries;

export const getCurrencies = (state: RootState) => state.travelsForm.currencies;

export const getSelectedDataConfirmed = (state: RootState) =>
  state.travelsForm.selectedDataConfirmed;

export const getSelectedData = (state: RootState) => {
  const selectedRegion = state.travelsForm.selectedRegion;
  const selectedCountries = state.travelsForm.selectedCountries;
  const selectedCurrencies = state.travelsForm.selectedCurrencies;

  return { selectedRegion, selectedCountries, selectedCurrencies };
};
