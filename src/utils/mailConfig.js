import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD, // Use app password, not your Gmail password
  },
});

async function sendEmail(infoObject) {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New Case #INGRID-5XH9",
    text: "I hope this email finds you well.",
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
      <h2 style="color: #333; text-align: center;">Client Intake Information</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Full Name:</td>
            <td style="padding: 8px;">${infoObject.fullName}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">Email:</td>
            <td style="padding: 8px;">${infoObject.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px;">${infoObject.phoneNumber}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">City/State:</td>
            <td style="padding: 8px;">${infoObject.cityState}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Case Type:</td>
            <td style="padding: 8px;">${infoObject.caseType}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">Incident Date:</td>
            <td style="padding: 8px;">${infoObject.incidentDate}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Description:</td>
            <td style="padding: 8px;">${infoObject.description}</td>
          </tr>
          <tr style="background-color: #f0f0f0;">
            <td style="padding: 8px; font-weight: bold;">Preferred Contact Time:</td>
            <td style="padding: 8px;">${infoObject.preferredContactTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  };

  try {
    const mailresponse = await transporter.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    console.log("Something went wrong in send email: ", error);
  }
}

export default sendEmail;
