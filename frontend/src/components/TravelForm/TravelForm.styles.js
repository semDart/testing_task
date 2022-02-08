import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  main_container: {
    textAlign: "center",
  },
  form_title: {
    marginTop: "50px",
    marginBottom: "20px",
  },
  form_description: {
    fontSize: "20px",
    fontStyle: "italic",
  },
  description_link: {
    padding: "3px 8px",
    marginLeft: "5px",
    marginRight: "5px",
    textDecoration: "none",
    fontWeight: "500",
    borderRadius: "10px",
    color: "inherit",
    backgroundColor: "lightblue",
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
