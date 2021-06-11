const Sequelize = require("sequelize");
const db = require("./database");

const Workspace = db.define("workspace", {
  spaceName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
  },
  creator: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  }
});

module.exports = Workspace;
