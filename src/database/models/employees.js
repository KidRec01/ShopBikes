// Importa Sequelize y define la conexión a la base de datos
import { DataTypes } from "sequelize";

// Define el modelo Empleados
const Employees = (sequelize) =>
  sequelize.define(
    "Employees",
    {
      id_emp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom_emp: {
        type: DataTypes.TEXT,
      },
      carg_emp: {
        type: DataTypes.TEXT,
      },
      tel_emp: {
        type: DataTypes.TEXT,
      },
      corelec_emp: {
        type: DataTypes.TEXT,
      },
    },
    {
      // Opciones adicionales del modelo
      tableName: "Employees", // Nombre de la tabla en la base de datos
      timestamps: true, // Indica si debe incluir campos createdAt y updatedAt
    },
  );

// Exporta el modelo para usarlo en otras partes de la aplicación
export default Employees;
