import { v4 as uuidv4 } from "uuid";
import { Travel } from "../../models/Travel";

export const rowsUtil = (tableData: Travel[]) => {
    return tableData.map(({ region, country, currency }) => {
        return {
            id: uuidv4(),
            region,
            country,
            currency,
        };
    });
};
