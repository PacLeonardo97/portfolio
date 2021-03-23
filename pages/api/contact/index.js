const nodemailer = require("nodemailer");

export default async (req, res) => {
    const { name, email, subject, telephone, body } = req.body;

    if(!name && !email && !subject && !telephone && !body) {
        return res.json({error: 'you must provide all body'})
    }
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: true,
        auth: {
          user: process.env.AUTH_EMAIL,
          pass: process.env.AUTH_PASSWORD,
        },
    });

    const mailOption = {
        from: `${email}`,
        to: `${process.env.AUTH_EMAIL}`,
        subject,
        text: `
            nome: ${name},
            telefone: ${telephone},
            corpo: ${body}
        `,
    };

    transporter.sendMail(mailOption, err => {
        if (err) {
          console.log(err);
          res.status(401).json(err);
        } else {
          console.log("mail send");
          res.send("success");
        }
    });
};