import db from "../database/db.js"
import { Resend } from "resend"
import { schedules } from "../global/constants.js"
import { setEmail } from "../global/helpers.js"
/**
 * @param {Request} req
 * @param {Response} res
 */
export const createSchedule = async (req, res) => {
    try {
        const { date, type, id_bike, client } = req.body;
        if (!date || !type || !id_bike) throw new Error("missing fields");
        const fullDate = new Date(date.year, date.month, date.day, date.hours)
        /**@type {Resend} */
        const resend = new Resend(process.env.RESEND_MAILS_API_KEYS);
        const hasRepeatedSchedule = await db.Schedule.findOne({ where: { fech_agen: fullDate } })
        if (!!hasRepeatedSchedule) throw new Error("The schedule repeated");
        const { since, to } = schedules.find(x => x.day === date.longDay);
        if (since > date.hours || to < date.hours) throw new Error("Invalid Hour");
        const clientDb = await db.Clients.findOrCreate({
            where: { corelec_cli: client.email }, defaults: {
                nom_cli: client.name,
                tel_cli: client.phone,
            }
        });
        await db.Schedule.create({ fech_agen: fullDate, tipo_agen: type, id_bike, ClientIdCli: clientDb[0].dataValues.id_cli });
        const product = await db.Bikes.findByPk(id_bike);
        const { data, error } = await resend.emails.send({
            from: `ShopBikes <onboarding@resend.dev>`,
            to: [process.env.ENTITY_EMAIL],
            subject: type,
            html: setEmail({
                client, product: {
                    name: product.name,
                    urlImage: product.image[0],
                }, schedule: {
                    date: fullDate,
                    type
                }
            }),
        });
        if (error) {
            throw new Error(error.message);
        }
        return res.status(200).json({ message: 'ok', data })
    }
    catch (error) {
        return res.status(500).json({ message: "error creating the schedule: " + error })
    }
}