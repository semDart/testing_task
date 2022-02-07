import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSelectedData } from "../../selectors";
import {
  resetSelectedData,
  SelectedData,
} from "../../reducers/travelsFormReducer";
import { rowsUtil } from "../../utils/rowsUtil/rowsUtil";
import { Button } from "@material-ui/core";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import styles from "./TravelTable.module.css";

const columnsUtil = (selectedData: SelectedData) => {
  const { selectedRegion, selectedCountries, selectedCurrencies } =
    selectedData;

  return [
    {
      field: "region",
      headerName: "Region",
      width: 200,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (props): React.ReactNode => {
        let highlightedItem;

        if (selectedRegion) {
          highlightedItem =
            props.formattedValue === selectedRegion ? styles.selected_item : "";
        }

        return <p className={highlightedItem}>{props.formattedValue}</p>;
      },
    },
    {
      field: "country",
      headerName: "Country",
      width: 300,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (props): React.ReactNode => {
        let highlightedItem;

        if (selectedCountries.length) {
          highlightedItem = selectedCountries.includes(props.formattedValue)
            ? styles.selected_item
            : "";
        }

        return <p className={highlightedItem}>{props.formattedValue}</p>;
      },
    },
    {
      field: "currency",
      headerName: "Currency",
      width: 300,
      editable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (props): React.ReactNode => {
        let highlightedItem;

        if (selectedCurrencies.length) {
          highlightedItem = selectedCurrencies.includes(props.formattedValue)
            ? styles.selected_item
            : "";
        }

        return <p className={highlightedItem}>{props.formattedValue}</p>;
      },
    },
  ] as GridColDef[];
};

// In this component use module css for styling because of columnsUtil function,
// inside which we can't use hook useStyles()
const TravelTable = () => {
  const travelsData = useAppSelector((state) => state.travelsTable.travelsData);
  const selectedData = useAppSelector(getSelectedData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    const userResponse = window.confirm(
      "Are you sure you want back? All selected data will be lost"
    );

    if (userResponse) {
      dispatch(resetSelectedData());
      navigate("/");
    }
  };

  const rows = rowsUtil(travelsData);
  const columns = columnsUtil(selectedData);

  return (
    <div className={styles.table_container}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBackButtonClick}
        className={styles.back_button}
      >
        Back to Form
      </Button>

      <h1>Travel Table</h1>
      <p className={styles.table_description}>
        Here you can see all data we have for now
      </p>
      <p className={styles.table_description}>
        Data you picked is
        <span className={styles.highlighted_text}>highlighted</span>
      </p>

      <DataGrid
        autoHeight
        rows={rows.toArray()}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        disableColumnMenu
        disableColumnSelector
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default TravelTable;
