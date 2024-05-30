
/**
 * @param {Object} props
 * @param {{ name: string, urlImage: string}} props.product
 * @param {{email: string, phone: string, name: string}} props.client
 * @param {{type: "visita de cotizacion" | "prueba de manejo", date: Date }} props.schedule
 */
export const setEmail = ({ product, client, schedule }) => {
    const { name, urlImage } = product
    const { email, phone, name: clientName } = client
    const { type, date } = schedule;
    const dateToShow = new Intl.DateTimeFormat('es-CO', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'America/Bogota',
    }).format(date);
    const wsMessage = `
        Hola, ${clientName}, vimos que agendaste una cita o te interesa el producto ${process.env.FRONT_URL}/${name}
        para el dia ${dateToShow}, cualquier duda o inquietud me llamo Danna a la orden.
    `
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Visita a consecioanrio: ${type}</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { width: 100%; max-width: 600px; margin: auto; background-color: #f9f9f9; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
                .button { background-color: #007BFF; color: #ffffff; padding: 10px 20px; text-align: center; display: inline-block; border-radius: 5px; text-decoration: none; }
                img { max-width: 100%; height: auto; }
            </style>
        </head>
    <body>
        <div class="container">
            <h1>El cliente ${clientName}</h1>
            <p>Estimado shopBikes,</p>
            <p>Tienes un cliente potencial por gestionar, el tipo de visita sera: ${type} la fecha: ${dateToShow}</p>    
            <a href="${process.env.FRONT_URL}/${name}"><img src=${urlImage} alt="${name}"></a>    
            <p><a href="https://wa.me/${phone}?text=${encodeURI(wsMessage)}">Contactar por whatsapp con el cliente</a></p>
            <a href="mailto:${email}">Contactar por correo</a>
        </div>
    </body>
</html>
    `
}