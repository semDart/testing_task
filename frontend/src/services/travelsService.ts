import { Travel } from "../models/Travel/Travel";

export const fetchTravelsData = async () => {
  try {
    const response = await fetch("http://localhost:4000/");
    const parsedResponse = await response.json();

    return parsedResponse as Travel[];
  } catch (error) {
    console.log("error in fetchTravelsData", error);
  }
};
