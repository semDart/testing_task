import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getSelectedDataConfirmed } from "./selectors/selectors";
import { getTravelsData } from "./reducers/travelsTableReducer";
import TravelForm from "./components/TravelForm/TravelForm";
import TravelTable from "./components/TravelTable/TravelTable";

const App = () => {
  const selectedDataConfirmed = useAppSelector(getSelectedDataConfirmed);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTravelsData());
  }, [dispatch]);

  return (
    <div className="App">
      {!selectedDataConfirmed && <TravelForm />}

      {selectedDataConfirmed && <TravelTable />}
    </div>
  );
};

export default App;
