import emailjs from "@emailjs/browser";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  attachment_url?: string;
};

export const sendContactEmail = async (
  data: ContactFormData
): Promise<void> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_ftp9d4l";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_a3fsqys";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ICC5NQ97mftDbxts6";

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS env not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY"
    );
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
      attachment_url: data.attachment_url || "",
    },
    { publicKey }
  );
};

