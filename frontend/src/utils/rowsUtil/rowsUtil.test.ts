import { Travel } from "../../models/Travel";
import { rowsUtil } from "./rowsUtil";


test("get rows data in main table", () => {
    const dataFromDB: Travel[] = [
        {
            region: "Asia",
            country: "Afghanistan",
            currency: "AFN Afghan Afghani",
        },
        {
            region: "East Europe",
            country: "Albania",
            currency: "ALL Albanian lek",
        },
        {
            region: "Africa",
            country: "Algeria",
            currency: "DZD Algerian dinar",
        },
        {
            country: "American Samoa",
            currency: "USD US dollar",
        },
        {
            region: "Occidental Europe",
            country: "Andorra",
            currency: "EUR Euro",
        },
        {
            region: "Africa",
            country: "Angola",
            currency: "AOA Angolan kwanza",
        },
        {
            country: "Anguilla",
            currency: "XCD East Caribbean dollar",
        },
        {
            region: "Caraibes",
            country: "Antigua and Barbuda",
            currency: "XCD East Caribbean dollar",
        },
        {
            region: "South and Central America",
            country: "Argentina",
            currency: "ARS Argentine peso",
        },
        {
            region: "East Europe",
            country: "Armenia",
            currency: "AMD Armenian dram",
        },
    ];

    expect(rowsUtil(dataFromDB)).toBeDefined();
    expect(rowsUtil(dataFromDB)).not.toBe(null);
    expect(rowsUtil(dataFromDB)[0]).toEqual(
        expect.objectContaining({
            id: expect.any(String),
            region: expect.any(String),
            country: expect.any(String),
            currency: expect.any(String),
        })
    );

});