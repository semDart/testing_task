const faker = require("@faker-js/faker");

module.exports = class Travel {
  static fetchAll() {
    let arrayWithRandomData = [];
    let itemsAmount = 1;
    let randomLocation = {};

    const createFakeData = () => {
      const randomRegion = `${faker.address.state()}, ${faker.address.stateAbbr()}`;
      const randomCountry = `${faker.address.country()}, ${faker.address.cityPrefix()}`;
      const randomCurrency = `${faker.finance.currencyName()}, ${faker.finance.currencyCode()}`;

      if (itemsAmount % 3 === 0) {
        randomLocation = {
          country: randomCountry,
          currency: randomCurrency,
        };
      } else {
        randomLocation = {
          region: randomRegion,
          country: randomCountry,
          currency: randomCurrency,
        };
      }

      arrayWithRandomData.push(randomLocation);
      itemsAmount += 1;

      if (itemsAmount < 201) {
        createFakeData();
      }
    };
    createFakeData();

    return arrayWithRandomData;
  }
};
