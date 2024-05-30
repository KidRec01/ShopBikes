import db from "../database/db.js";
import bcrypt from "bcrypt-nodejs";

const passwordEncrypted = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

export const createAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email.includes("@")) throw new Error("email not valid");
        if (
            !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                password,
            )
        )
            throw new Error("error creating password");
        await db.Admin.create({ email, password: passwordEncrypted(password) });
        return res.status(200).json({ message: "admin created" });
    } catch (e) {
        return res.status(500).json({ error: "error founded: " + e.message });
    }
};

export const login = (req, res) => {
    const admin = req.user;
    return res.json(admin);
};

export const logOut = (req, res) => {
    req.logout((err) => {
        if (err) return res.status(500).json({ message: 'Error on logOut' + err })
        return res.json({ message: "Ok" });
    });
};

export const isAuthenticated = (req, res) => {
    return res.status(200).json({ message: "ok" });
}