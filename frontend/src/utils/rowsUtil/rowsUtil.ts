import { v4 as uuidv4 } from "uuid";
import { ITravel } from "../../interfaces/travels.interfaces";

export const rowsUtil = (tableData: ITravel[]) => {
    return tableData.map(({ region, country, currency }) => {
        return {
            id: uuidv4(),
            region,
            country,
            currency,
        };
    });
};
