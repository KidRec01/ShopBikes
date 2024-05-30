import db from "../database/db.js";

export const getEmployees = async (req, res) => {
    try {
        const employees = await db.Employees.findAll();
        if (!employees.length) throw new Error("employees empty");
        return res.status(200).json(employees);
    } catch (e) {
        return res.status(500).json({ error: "error founded" });
    }
};

export const createEmployees = async (req, res) => {
    try {
        const employees = req.body.employees;
        await db.Employees.bulkCreate(employees);
        return res.status(200).json({ message: "ok" });
    } catch (e) {
        return res.status(500).json({ error: "error founded: " + e.message });
    }
};