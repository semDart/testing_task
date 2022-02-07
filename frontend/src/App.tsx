import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getTravelsData } from "./reducers/travelsTableReducer";
import TravelForm from "./components/TravelForm/TravelForm";
import TravelTable from "./components/TravelTable/TravelTable";

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
      {!selectedDataConfirmed && <TravelForm />}

      {selectedDataConfirmed && <TravelTable />}
    </div>
  );
};

export default App;
