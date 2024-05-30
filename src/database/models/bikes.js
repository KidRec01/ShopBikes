// Importa Sequelize y define la conexión a la base de datos
import { DataTypes } from "sequelize";

// Define el modelo Bikes
/**@param {import("sequelize").Sequelize}*/
const Bikes = (sequelize) =>
  /**@description se trae el sequelize una vez conectado con la base de datos */
  sequelize.define(
    "Bikes",
    {
      id_mto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
      },
      type: {
        type: DataTypes.TEXT,
      },
      mark: {
        type: DataTypes.TEXT,
      },
      model: {
        type: DataTypes.NUMERIC,
      },
      kilometer: {
        type: DataTypes.NUMERIC,
      },
      cylinders: {
        type: DataTypes.NUMERIC,
      },
      location: {
        type: DataTypes.TEXT,
      },
      price: {
        type: DataTypes.NUMERIC,
      },
      description: {
        type: DataTypes.TEXT,
      },
      color: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
    },
    {
      // Opciones adicionales del modelo
      tableName: "bikes", // Nombre de la tabla en la base de datos
      timestamps: true, // Indica si debe incluir campos createdAt y updatedAt
    },
  );

// Exporta el modelo para usarlo en otras partes de la aplicación
export default Bikes;
