import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITravelsState } from "../interfaces/travels.interfaces";
import { fetchTravelsData } from "../services/travelsService";

import { List } from "immutable";

const initialState: ITravelsState = {
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
      .addCase(getTravelsData.pending, (state: ITravelsState) => {
        state.status = "loading";
      })
      .addCase(getTravelsData.fulfilled, (state: ITravelsState, action) => {
        state.status = "idle";
        state.travelsData = action.payload;
      });
  },
});

export default travelsTableReducer.reducer;
