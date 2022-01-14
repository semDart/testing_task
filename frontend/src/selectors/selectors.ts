import { ITravel } from "../interfaces/travels.interfaces";
import { RootState } from "../store/store";

export const getTravelsTableData = (state: RootState) => {
  const parsedTravelsData = state.travelsTable.travelsData.toJS();

  return parsedTravelsData;
};

export const getModifiedTravelsData = (state: RootState) => {
  const parsedTravelsData = state.travelsTable.travelsData.toJS();

  const modifiedTravelsData = parsedTravelsData.map((location: ITravel) => {
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
