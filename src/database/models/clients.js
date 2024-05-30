// Importa Sequelize y define la conexión a la base de datos
import { DataTypes } from "sequelize";

// Define el modelo Cliente
const Cliente = (sequelize) =>
  sequelize.define(
    "Clients",
    {
      id_cli: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom_cli: {
        type: DataTypes.TEXT,
      },
      tel_cli: {
        type: DataTypes.TEXT,
      },
      corelec_cli: {
        type: DataTypes.TEXT,
      },
    },
    {
      // Opciones adicionales del modelo
      tableName: "clients", // Nombre de la tabla en la base de datos
      timestamps: true, // Indica si debe incluir campos createdAt y updatedAt
    },
  );

// Exporta el modelo para usarlo en otras partes de la aplicación
export default Cliente;
