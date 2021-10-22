const Movimentations = (sequelize, DataTypes) => {
  const Movimentations = sequelize.define("Movimentations", {
    type: DataTypes.STRING,
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING,
  },{
    timestamps: false
  });

  return Movimentations;
};

module.exports = Movimentations;