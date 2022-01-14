import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import travelsFormReducer from "../reducers/travelsFormReducer";
import travelsTableReducer from "../reducers/travelsTableReducer";

// Needed because of List as non-seriazable type of value.
// Fixed due to https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    travelsTable: travelsTableReducer,
    travelsForm: travelsFormReducer,
  },
  middleware: () => customizedMiddleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
