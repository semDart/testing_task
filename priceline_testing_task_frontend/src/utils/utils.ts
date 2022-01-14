import { ITravel } from "../interfaces/travels.interfaces";

export const getSinglePropertyByName = (
  data: ITravel[],
  propertyName: string
) => {
  const arrayWithSingleProperties = data.map((location) => {
    if (location[propertyName]) {
      return location[propertyName];
    } else {
      return "Not provided";
    }
  });

  const uniqueValuesArray = arrayWithSingleProperties
    .filter(
      (property: string, index: number, array: string[]) =>
        array.indexOf(property) === index
    )
    .sort();

  return uniqueValuesArray;
};

export const rowsUtil = (tableData: ITravel[]) => {
  return tableData.map(({ region, country, currency }) => {
    return {
      id: country,
      region,
      country,
      currency,
    };
  });
};
