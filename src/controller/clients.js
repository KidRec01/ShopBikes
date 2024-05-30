import db from "../database/db.js";
/**
 * @param {Request} req
 * @param {Response} res
 */
export const getClients = async (req, res) => {
  try {
    const clients = await db.Clients.findAll();
    if (!clients.length) throw new Error("clients empty");
    return res.status(200).json(clients);
  } catch (e) {
    return res.status(500).json({ error: "an error has been appeared" });
  }
};
/**
 * @param {Request} req
 * @param {Response} res
 */
export const postClients = async (req, res) => {
  try {
    const { clients } = req.body;
    await db.Clients.bulkCreate(clients);
    return res.status(200).json({ message: "ok" });
  } catch (e) {
    console.log({ e });
    return res.status(500).json({ error: "an error has been appeared" });
  }
};
