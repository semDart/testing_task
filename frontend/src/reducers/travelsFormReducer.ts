import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { country, currency, region } from "../constants";
import { getTravelDataByFieldName } from "../utils/getTravelDataByFieldName/getTravelDataByFieldName";
import { List } from "immutable";

export type SelectedData = {
  selectedRegion: string;
  selectedCountries: string[];
  selectedCurrencies: string[];
};

type SeparatedTravelData = {
  regions: List<string>;
  countries: List<string>;
  currencies: List<string>;
};

type TravelFormState = {
  regions: List<string>;
  countries: List<string>;
  currencies: List<string>;
  selectedRegion: string;
  selectedCountries: string[];
  selectedCurrencies: string[];
  selectedDataConfirmed: boolean;
};

const initialState: TravelFormState = {
  regions: List<string>(),
  countries: List<string>(),
  currencies: List<string>(),
  selectedRegion: "",
  selectedCountries: [],
  selectedCurrencies: [],
  selectedDataConfirmed: false,
};

export const separateDataByProperty = createAsyncThunk<
  SeparatedTravelData,
  void
>("travels/separateDataByProperty", (_, thunkAPI) => {
  const rootState = thunkAPI.getState() as RootState;
  const travelsDataFromState = rootState.travelsTable.travelsData;

  if (travelsDataFromState.size > 0) {
    const regions = getTravelDataByFieldName(travelsDataFromState, region);
    const countries = getTravelDataByFieldName(travelsDataFromState, country);
    const currencies = getTravelDataByFieldName(travelsDataFromState, currency);

    return { regions, countries, currencies };
  }

  return {} as SeparatedTravelData;
});

const travelsFormReducer = createSlice({
  name: "travelsForm",
  initialState,
  reducers: {
    saveSelectedData(state, action: PayloadAction<SelectedData>) {
      state.selectedRegion = action.payload.selectedRegion;
      state.selectedCountries = action.payload.selectedCountries;
      state.selectedCurrencies = action.payload.selectedCurrencies;
      state.selectedDataConfirmed = true;
    },
    resetSelectedData(state) {
      state.selectedRegion = "";
      state.selectedCountries = [];
      state.selectedCurrencies = [];
      state.selectedDataConfirmed = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(separateDataByProperty.fulfilled, (state, action) => ({
      ...state,
      regions: action.payload.regions,
      countries: action.payload.countries,
      currencies: action.payload.currencies,
    }));
  },
});

export const { saveSelectedData, resetSelectedData } =
  travelsFormReducer.actions;
export default travelsFormReducer.reducer;
