import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { country, currency, region } from "../constants";
import {
  ISaveSelectedData,
  ISeparateArrayByProperty,
  ITravelsFormState,
} from "../interfaces/travels.interfaces";
import { getTravelDataByFieldName } from "../utils/getTravelDataByFieldName/getTravelDataByFieldName";

const initialState: ITravelsFormState = {
  regions: [],
  countries: [],
  currencies: [],
  selectedRegion: "",
  selectedCountries: [],
  selectedCurrencies: [],
  selectedDataConfirmed: false,
};

export const separateDataByProperty = createAsyncThunk<
  ISeparateArrayByProperty,
  void
>("travels/separateDataByProperty", (_, thunkAPI) => {
  const rootState: any = thunkAPI.getState();
  const travelsDataFromState = rootState.travelsTable.travelsData.toJS();

  if (travelsDataFromState.length > 0) {
    const regions = getTravelDataByFieldName(travelsDataFromState, region);

    const countries = getTravelDataByFieldName(travelsDataFromState, country);

    const currencies = getTravelDataByFieldName(travelsDataFromState, currency);

    return { regions, countries, currencies };
  }

  return {} as ISeparateArrayByProperty;
});

const travelsFormReducer = createSlice({
  name: "travelsForm",
  initialState,
  reducers: {
    saveSelectedData(state, action: PayloadAction<ISaveSelectedData>) {
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
    builder.addCase(
      separateDataByProperty.fulfilled,
      (state: ITravelsFormState, action) => {
        state.regions = action.payload.regions;
        state.countries = action.payload.countries;
        state.currencies = action.payload.currencies;
      }
    );
  },
});

export const { saveSelectedData, resetSelectedData } =
  travelsFormReducer.actions;
export default travelsFormReducer.reducer;
