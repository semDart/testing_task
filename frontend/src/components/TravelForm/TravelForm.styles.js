import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  main_container: {
    textAlign: "center",
  },
  form_title: {
    marginTop: "50px",
    marginBottom: "50px",
  },
  form_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "600px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  region_selector: {
    minWidth: "250px",
    maxWidth: "300px",
    marginBottom: "30px",
  },
  buttons_container: {
    width: "400px",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
