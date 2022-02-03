import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Travel } from "../models/Travel";
import { fetchTravelsData } from "../services/travelsService";

import { List } from "immutable";

type TravelTableState = {
  status: "idle" | "loading" | "failed";
  travelsData: List<Travel>;
};

const initialState: TravelTableState = {
  status: "idle",
  travelsData: List<Travel>(),
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
      .addCase(getTravelsData.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(getTravelsData.fulfilled, (state, action) => ({
        ...state,
        status: "idle",
        travelsData: action.payload,
      }))
      .addCase(getTravelsData.rejected, (state) => ({
        ...state,
        status: "failed",
      }));
  },
});

export default travelsTableReducer.reducer;
