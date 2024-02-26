import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../../db";

const user = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})