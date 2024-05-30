import { DataTypes } from "sequelize";
/**@param {Sequelize} sequelize */
const Admin = (sequelize) =>
  sequelize.define("Admin", {
    id_admin: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
      isEmail: true,
    },
    password: {
      type: DataTypes.TEXT,
    },
    superAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    tableName: "Administrator", // Nombre de la tabla en la base de datos
    timestamps: true, // Indica si debe incluir campos createdAt y updatedAt
  },);


export default Admin;
