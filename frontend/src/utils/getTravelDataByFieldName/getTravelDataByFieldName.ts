import { ITravel } from "../../interfaces/travels.interfaces";

const getUniqueValues = (valuesArray: string[]) =>
    valuesArray.filter(
        (property: string, index: number, array: string[]) =>
            array.indexOf(property) === index
    );

const sortArrayAlphabetically = (valuesArray: string[]) =>
    [...valuesArray].sort((currentString, nextString) =>
        currentString.localeCompare(nextString)
    );

export const getTravelDataByFieldName = (
    travelData: ITravel[],
    propertyName: string
) => {
    const valuesByPropertyName = travelData.map((location) =>
        location[propertyName] ? location[propertyName] : "Not provided"
    );
    const uniqueValues = getUniqueValues(valuesByPropertyName);
    const valuesSortedAlphabetically = sortArrayAlphabetically(uniqueValues);

    return valuesSortedAlphabetically;
};
