// Importa Sequelize y define la conexión a la base de datos
import { DataTypes } from "sequelize";
// import  Clients  from './clients.js'; // Importa el modelo de Cliente si está en un archivo separado

// Define el modelo Agenda
const Schedule = (sequelize) =>
  sequelize.define(
    "Schedule",
    {
      id_agen: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fech_agen: {
        type: DataTypes.DATE,
      },
      tipo_agen: {
        type: DataTypes.TEXT,
      },
      id_bike: {
        type: DataTypes.TEXT,
      }
    },
    {
      // Opciones adicionales del modelo
      tableName: "agenda", // Nombre de la tabla en la base de datos
      timestamps: true, // Indica si debe incluir campos createdAt y updatedAt
    },
  );

// Exporta el modelo para usarlo en otras partes de la aplicación
export default Schedule;
