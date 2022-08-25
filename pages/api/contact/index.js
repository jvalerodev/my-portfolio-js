import validate from '@/server/middleware/validate';
import contactSchema from '@/server/validator/contactSchema';
import transporter from '@/server/helpers/transporter';

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      const { name, email, subject, msg } = req.body;

      try {
        const info = await transporter.sendMail({
          from: `'My Portfolio 👨‍💻' <${email}>`,
          to: process.env.EMAIL_USER,
          subject: `${subject} 📢`,
          text: 'My Portfolio - Jesús Valero',
          html: `
            <p>${msg}</p>

            <ul style="padding-left: 0; font-weight: bold;">
              <p style="margin-bottom: 3px;">Contact Info:</p>
              <li>Name: <span style="font-weight: normal;">${name}</span></li>
              <li>Email: <span style="font-weight: normal;">${email}</span></li>
            </ul>
          `,
        });

        return res.status(200).json({ success: true, msg: 'Email sent successfully.' });
      } catch (error) {
        console.log(error);
        return res.status(502).json({ success: false, msg: 'Error sending email.' });
      }

    default:
      res.status(500).json({ msg: 'Invalid request type' });
  }
};

export default validate(contactSchema, handler);