const Container = (sequelize, DataTypes) => {
  const Container = sequelize.define("Container", {

    fullName: DataTypes.STRING,
    containerId: DataTypes.STRING,
    type: DataTypes.NUMBER,
    status: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {
    timestamps: false
  });

  return Container;
};

module.exports = Container;