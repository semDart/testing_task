import { List } from "immutable";
import { Travel } from "../../models/Travel";

/**
 * Get unique values
 * @function
 * @param valuesArray
 * @returns {Array.<string>}
 */
const getUniqueValues = (valuesArray: List<string>): List<string> =>
    valuesArray.filter(
        (property: string, index: number, array: List<string>) =>
            array.indexOf(property) === index
    );

/**
 * Sort array of values alphabetically
 * @function
 * @param valuesArray
 * @returns {Array.<string>}
 */
const sortArrayAlphabetically = (valuesArray: List<string>): List<string> =>
    valuesArray.sort((currentString, nextString) =>
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
    travelData: List<Travel>,
    propertyName: string
): List<string> => {
    const valuesByPropertyName = travelData
        .map((location) => location[propertyName as keyof Travel])
        .filter((value): value is string => !!value);

    const uniqueValues = getUniqueValues(valuesByPropertyName);
    const valuesSortedAlphabetically = sortArrayAlphabetically(uniqueValues);

    return valuesSortedAlphabetically;
};
