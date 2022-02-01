import { ITravel } from "../../interfaces/travels.interfaces";

/**
 * Get unique values
 * @function
 * @param valuesArray 
 * @returns {Array.<string>}
 */
const getUniqueValues = (valuesArray: string[]): string[] =>
    valuesArray.filter(
        (property: string, index: number, array: string[]) =>
            array.indexOf(property) === index
    );

/**
 * Sort array of values alphabetically
 * @function
 * @param valuesArray 
 * @returns {Array.<string>}
 */
const sortArrayAlphabetically = (valuesArray: string[]): string[] =>
    [...valuesArray].sort((currentString, nextString) =>
        currentString.localeCompare(nextString)
    );

/**
 * Get travel data by field name to fill Redux store
 * @function
 * @param {array} travelData - travel data from DB
 * @param {string} propertyName - field name which exists in travel data instance
 * @returns {Array.<string>}
 */
export const getTravelDataByFieldName = (
    travelData: ITravel[],
    propertyName: string
): string[] => {
    const valuesByPropertyName = travelData.map((location) =>
        location[propertyName] ? location[propertyName] : "Not provided"
    );
    const uniqueValues = getUniqueValues(valuesByPropertyName);
    const valuesSortedAlphabetically = sortArrayAlphabetically(uniqueValues);

    return valuesSortedAlphabetically;
};
