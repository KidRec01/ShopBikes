// Importa Sequelize y define la conexión a la base de datos
import { DataTypes } from "sequelize";
// import Clients from './clients.js';

// Define el modelo Servicios
const Servicios = (sequelize) =>
  sequelize.define(
    "Services",
    {
      id_serv: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo_serv: {
        type: DataTypes.TEXT,
      },
      des_ser: {
        type: DataTypes.TEXT,
      },
      cost_serv: {
        type: DataTypes.NUMERIC,
      },
      placa_ser: {
        type: DataTypes.TEXT,
      },
      // id_cli: {
      //     type: DataTypes.INTEGER,
      //     references: {
      //       model: Clients, // Modelo de Cliente al que se hace referencia
      //       key: 'id_cli' // Campo de Cliente al que se hace referencia
      //     }
      // }
    },
    {
      // Opciones adicionales del modelo
      tableName: "servicios", // Nombre de la tabla en la base de datos
      timestamps: true, // Indica si debe incluir campos createdAt y updatedAt
    },
  );

// Exporta el modelo para usarlo en otras partes de la aplicación
export default Servicios;
