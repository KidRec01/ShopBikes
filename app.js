import express from "express";
import session from "express-session";
import cors from 'cors'
import morgan from "morgan";
import passport from "passport";
import clients from "./src/routes/clients.js"
import bikes from "./src/routes/bikes.js"
import admin from "./src/routes/admin.js"
import employees from "./src/routes/employees.js"
import schedule from "./src/routes/schedule.js"
import "./src/global/strategies/local.js";
import { config } from "dotenv";
config();
const app = express();

app.use(morgan("dev"));
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.status(200).json({ text: "index" });
});
app.use("/clients", clients);
app.use("/bikes", bikes);
app.use("/admin", admin);
app.use("/employees", employees);
app.use("/schedule", schedule)
app.use("*", (req, res) => res.status(404).json("not found"));
export default app;
