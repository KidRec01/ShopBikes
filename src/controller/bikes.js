import db from "../database/db.js";

export const getBikes = async (req, res) => {
  try {
    const bikes = await db.Bikes.findAll();
    if (!bikes.length) throw new Error("bikes empty");
    return res.status(200).json(bikes);
  } catch (e) {
    return res.status(500).json({ error: "error founded" });
  }
};

export const postBikes = async (req, res) => {
  try {
    const bikes = req.body.bikes;    
    await db.Bikes.bulkCreate(bikes);
    return res.status(200).json({ message: "ok" });
  } catch (e) {
    return res.status(500).json({ error: "error founded: " + e.message });
  }
};
/**
 * @param {Request} req
 * @param {Response} res
 */
export const getBike = async (req, res) => {
  try {
    const id = req.params.id;
    const bike = await db.Bikes.findByPk(id);
    res.status(200).json(bike);
  } catch (e) {
    return res.status(500).json({ error: "error founded" });
  }
};
export const putBike = async (req, res) => {
  try {
    const id = req.params.id;
    const newBike = req.body;
    /**@type {import("sequelize").Model<any, any>} */
    const bike = await db.Bikes.findByPk(id);
    bike.set(newBike);
    await bike.save();
    return res.status(200).json({ message: "Ok" });
  } catch (e) {
    return res.status(500).json({ error: "error founded" });
  }
};
export const deleteBike = async (req, res) => {
  try {
    const id = req.params.id;
    /**@type {import("sequelize").Model<any, any>} */
    await db.Bikes.destroy({
      where: {
        id_mto: id,
      },
    });
    return res
      .status(200)
      .json({
        message:
          "The bike with the id: " + id + "has been successfully deleted",
      });
  } catch (e) {
    return res.status(500).json({ error: "error founded" });
  }
};
