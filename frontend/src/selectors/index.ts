import { RootState } from "../store/store";

export const getTravelsTableData = (state: RootState) =>
  state.travelsTable.travelsData;

export const getRegions = (state: RootState) => state.travelsForm.regions;

export const getCountries = (state: RootState) => state.travelsForm.countries;

export const getCurrencies = (state: RootState) => state.travelsForm.currencies;

export const getSelectedDataConfirmed = (state: RootState) =>
  state.travelsForm.selectedDataConfirmed;

export const getSelectedData = (state: RootState) => {
  const { selectedRegion, selectedCountries, selectedCurrencies } =
    state.travelsForm;

  return { selectedRegion, selectedCountries, selectedCurrencies };
};
