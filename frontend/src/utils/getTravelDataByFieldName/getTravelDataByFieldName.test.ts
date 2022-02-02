import { Travel } from "../../models/Travel/Travel";
import { getTravelDataByFieldName } from "./getTravelDataByFieldName";


test("get array by single property name data", () => {
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

    expect(getTravelDataByFieldName(dataFromDB, "region")).toBeDefined();
    expect(getTravelDataByFieldName(dataFromDB, "region")).not.toBe(null);
    expect(getTravelDataByFieldName(dataFromDB, "region")).toContain("Asia");

    expect(getTravelDataByFieldName(dataFromDB, "country")).toBeDefined();
    expect(getTravelDataByFieldName(dataFromDB, "country")).not.toBe(null);
    expect(getTravelDataByFieldName(dataFromDB, "country")).toContain(
        "Afghanistan"
    );

    expect(getTravelDataByFieldName(dataFromDB, "currency")).toBeDefined();
    expect(getTravelDataByFieldName(dataFromDB, "currency")).not.toBe(null);
    expect(getTravelDataByFieldName(dataFromDB, "currency")).toContain(
        "EUR Euro"
    );
});