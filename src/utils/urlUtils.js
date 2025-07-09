export const generateRandomShortcode = (length = 8) => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export const isValidShortcode = (code) => {
  const regex = /^[a-zA-Z0-9]{4,12}$/;
  return regex.test(code);
};

export const getExpiryTimestamp = (minutes = 30) => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + minutes);
  return now.toISOString(); // ISO format is best for storage
};

export const isExpired = (expiryDate) => {
  return new Date(expiryDate).getTime() < Date.now();
};
