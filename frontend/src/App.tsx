import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getTravelsData } from "./reducers/travelsTableReducer";
import PrivateRoute from "./ProtectedRoutes/PrivateRoute";
import { TravelFormPage } from "./pages/TravelFormPage";
import { TravelTablePage } from "./pages/TravelTablePage";

const App = () => {
  const selectedDataConfirmed = useAppSelector(
    (state) => state.travelsForm.selectedDataConfirmed
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTravelsData());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<TravelFormPage />} />

        <Route
          path="/table"
          element={
            <PrivateRoute condition={selectedDataConfirmed} rediractingPath="/">
              <TravelTablePage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
