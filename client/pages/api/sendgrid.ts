import sendgrid from '@sendgrid/mail';
const sendgridKey = process.env.NEXT_PUBLIC_SENDGRID_KEY;
// @ts-ignore
sendgrid.setApiKey(sendgridKey);

async function sendMail(req: any, res: any) {
  const msg = {
    to: req.body.to,
    from: req.body.from,
    name: req.body.name,
    subject: `${req.body.subject} - mattjaikaran.com contact form`,
    text: req.body.text,
    html: `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Matt Jaikaran Email</title>
        <meta name="description" content="Matt Jaikaran">
        <meta name="author" content="Matt Jaikaran">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />     
      </head>
      <body>
        ${req.body.html}
      </body>
    `,
  };
  try {
    const response: any = await sendgrid.send(msg);
    console.log('response', response)
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error: any) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
}

export default sendMail;
