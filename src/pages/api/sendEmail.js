import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email
        pass: process.env.GMAIL_PASSWORD, // Your Gmail app password (for security)
      },
    });

    const mailOptions = {
      from: email, // The sender's email (user's email)
      to: process.env.GMAIL_USER, // Your Gmail email where you want to receive the form data
      subject: `New Message from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to send email', error });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
