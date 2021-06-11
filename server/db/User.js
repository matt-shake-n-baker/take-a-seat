const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  role:{
      type: Sequelize.ENUM('Admin', 'Employee'),
      defaultValue: 'Employee',
      allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png",
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [8,100]
    },
  },
  team: {
      type: Sequelize.STRING,
      defaultValue: null
  },
});

module.exports = User;
