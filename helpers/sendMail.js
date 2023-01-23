const sgMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async data => {
  const email = { ...data, from: 'zstas22@yahoo.com' };
  await sgMail.send(email);
  return true;
};

module.exports = sendMail;
