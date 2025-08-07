import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'olamideoso65@gmail.com'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};