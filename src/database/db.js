import { Sequelize } from "sequelize";
import modelBikes from "./models/bikes.js";
import modelClients from "./models/clients.js";
import modelEmployees from "./models/employees.js";
import modelSchedule from "./models/schedule.js";
import modelServices from "./models/services.js";
import modelAdmin from "./models/admin.js";

const sequelize = new Sequelize(
  "postgres://postgres:263201@localhost:5432/bikeshop",
);

modelBikes(sequelize);
modelClients(sequelize);
modelEmployees(sequelize);
modelSchedule(sequelize);
modelServices(sequelize);
modelAdmin(sequelize);

const { Bikes, Clients, Employees, Schedule, Services } = sequelize.models;

// clientes (1)----------------------------------------(M) Servicios
Clients.hasMany(Services);
Services.belongsTo(Clients);
// Clientes (M)-----------------Favorito---------------(M) Bikes
Clients.belongsToMany(Bikes, { through: "Favorites" });
Bikes.belongsToMany(Clients, { through: "Favorites" });
// Clientes (1)----------------------------------------(M) Agenda
Clients.hasMany(Schedule);
Schedule.belongsTo(Clients);
// Bikes (1)-------------------------------------------(M) Agenda
/**@description commented for unnecessary code */
// Bikes.hasMany(Schedule);
// Schedule.belongsTo(Bikes);
// Servicios (M)-------------Serv_Empleados------------(M) Empleados
Services.belongsToMany(Employees, { through: "Serv_emp" });
Employees.belongsToMany(Services, { through: "Serv_emp" });

const tem = {
  ...sequelize.models,
  db: sequelize,
};
export default tem;
