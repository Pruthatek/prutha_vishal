const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "ansh@pruthatek.com",
    pass: "veyasvlqcarfhpyf",
  },
});

const mailList = ["ansh@pruthatek.com", "info@pruthatek.com"];

exports.sendEmail = functions.firestore
  .document("contact/{contactId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `${snap.data().firstName} ${snap.data().lastName} <${
        snap.data().email
      }>`,
      to: "support@pruthatek.com",
      cc: mailList,
      subject: `${snap.data().subject}`,
      html: `<div
            >
                <p style="margin-bottom: 10px; font-size: 20px">Name: ${`${
                  snap.data().firstName
                } ${snap.data().lastName}`} </p>
                <p style="margin-bottom: 10px; font-size: 20px">Email: ${
                  snap.data().email
                } </p>
                <p style="margin-bottom: 10px; font-size: 20px">Phone Number: ${
                  snap.data().phoneNumber
                } </p>
                <p style="margin-bottom: 10px; font-size: 20px">Company Name: ${
                  snap.data().companyName
                } </p>
                <p style="margin-bottom: 10px; font-size: 20px">Subject : ${
                  snap.data().subject
                } </p>
                <p style="margin-bottom: 10px; font-size: 20px">Message: ${
                  snap.data().message
                } </p>
                <p style="margin-bottom: 10px; font-size: 20px">File: ${
                  snap.data().file
                } </p>
                <p style="margin-bottom: 10px; font-size: 20px">Country: ${
                  snap.data().country
                } </p>
            </div>
            `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

exports.mailSubscribe = functions.firestore
  .document("subscribe/{subscribeId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: `<${snap.data().mailSubscribe}>`,
      to: "support@pruthatek.com",
      cc: mailList,
      subject: `Pruthatek Subscribe`,
      html: `<div
            >
                <p style="margin-bottom: 10px; font-size: 20px">Email: ${
                  snap.data().mailSubscribe
                } </p>
            </div>
            `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });
