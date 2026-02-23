export const WHATSAPP_NUMBER = "543487542190";

export const getWhatsAppLink = (message = "Hola! Me gustaría consultar sobre Nutrición Ganadera") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const getProductWhatsAppLink = (productName) => {
  const message = `Hola! Me interesa consultar por el producto: ${productName}`;
  return getWhatsAppLink(message);
};

export const getDistributorWhatsAppLink = () => {
  const message = "Hola! Me gustaría información sobre cómo ser distribuidor de Nutrición Ganadera";
  return getWhatsAppLink(message);
};
