const fs = require("fs");
const path = require("path");

module.exports = class Travel {
  static fetchAll() {
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "travelsData.json"
    );

    const travelData = fs.readFileSync(p, "utf8");

    return travelData;
  }
};
