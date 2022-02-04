import { List } from "immutable";
import { v4 as uuidv4 } from "uuid";
import { Travel } from "../../models/Travel";

export const rowsUtil = (tableData: List<Travel>) => {
    return tableData.map(({ region, country, currency }) => ({
        id: uuidv4(),
        region,
        country,
        currency,
    }));
};
