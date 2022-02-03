import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTravelsData } from "../services/travelsService";

import { List } from "immutable";

type TravelTableState = {
  status: "idle" | "loading" | "failed";
  travelsData: any;
}

const initialState: TravelTableState = {
  status: "idle",
  travelsData: List([]),
};

export const getTravelsData = createAsyncThunk(
  "travels/getTravelsData",
  async () => {
    const data = await fetchTravelsData();
    const immutableData = List(data);

    return immutableData;
  }
);

const travelsTableReducer = createSlice({
  name: "travelsTable",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTravelsData.pending, (state: TravelTableState) => {
        state.status = "loading";
      })
      .addCase(getTravelsData.fulfilled, (state: TravelTableState, action) => {
        state.status = "idle";
        state.travelsData = action.payload;
      });
  },
});

export default travelsTableReducer.reducer;
