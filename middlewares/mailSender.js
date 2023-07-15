const nodemailer = require("nodemailer");

const mailsender = async (email, verifyToken) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "meta",
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: "kyrylo_polozhenets@meta.ua",
        pass: process.env.PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: "kyrylo_polozhenets@meta.ua",
      to: email,
      subject: "Nodemailer test",
      text: `Привіт. Ми тестуємо надсилання листів! ${verifyToken}`,
    });
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = mailsender;
