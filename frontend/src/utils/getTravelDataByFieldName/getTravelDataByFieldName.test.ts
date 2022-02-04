import { List } from "immutable";
import { getTravelDataByFieldName } from "./getTravelDataByFieldName";

test("get array by single property name data", () => {
    const dataFromDB = [
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
    const immutableData = List(dataFromDB);

    expect(getTravelDataByFieldName(immutableData, "region")).toBeDefined();
    expect(getTravelDataByFieldName(immutableData, "region")).not.toBe(null);
    expect(getTravelDataByFieldName(immutableData, "region")).toContain("Asia");

    expect(getTravelDataByFieldName(immutableData, "country")).toBeDefined();
    expect(getTravelDataByFieldName(immutableData, "country")).not.toBe(null);
    expect(getTravelDataByFieldName(immutableData, "country")).toContain(
        "Afghanistan"
    );

    expect(getTravelDataByFieldName(immutableData, "currency")).toBeDefined();
    expect(getTravelDataByFieldName(immutableData, "currency")).not.toBe(null);
    expect(getTravelDataByFieldName(immutableData, "currency")).toContain(
        "EUR Euro"
    );
});
