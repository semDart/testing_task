import { ITravel } from "../../interfaces/travels.interfaces";
import { getSinglePropertyByName } from "./getSinglePropertyByName";


test("get array by single property name data", () => {
    const dataFromDB: ITravel[] = [
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

    expect(getSinglePropertyByName(dataFromDB, "region")).toBeDefined();
    expect(getSinglePropertyByName(dataFromDB, "region")).not.toBe(null);
    expect(getSinglePropertyByName(dataFromDB, "region")).toContain("Asia");

    expect(getSinglePropertyByName(dataFromDB, "country")).toBeDefined();
    expect(getSinglePropertyByName(dataFromDB, "country")).not.toBe(null);
    expect(getSinglePropertyByName(dataFromDB, "country")).toContain(
        "Afghanistan"
    );

    expect(getSinglePropertyByName(dataFromDB, "currency")).toBeDefined();
    expect(getSinglePropertyByName(dataFromDB, "currency")).not.toBe(null);
    expect(getSinglePropertyByName(dataFromDB, "currency")).toContain(
        "EUR Euro"
    );
});