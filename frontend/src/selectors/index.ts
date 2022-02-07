import { RootState } from "../store/store";

export const getSelectedData = (state: RootState) => {
  const { selectedRegion, selectedCountries, selectedCurrencies } =
    state.travelsForm;

  return { selectedRegion, selectedCountries, selectedCurrencies };
};
