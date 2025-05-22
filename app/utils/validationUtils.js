export const isValidEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(value);
};
export const isValidPassword = (value) => {
  if (
    !value ||
    !value.length ||
    !value.trim().length ||
    value.trim().length < 8
  )
    return false;
  return true;
};
export const isValidCandidatePassword = (value) => {
  if (
    !value ||
    !value.length ||
    !value.trim().length ||
    value.trim().length < 3
  )
    return false;
  return true;
};
export const isValidFirstName = (value) => {
  if (
    !value ||
    !value.length ||
    !value.trim().length ||
    value.trim().length < 3
  )
    return false;
  if (value.trim().length >= 3 && value.trim().length < 30) return true;
  return false;
};
export const isValidLastName = (value) => {
  if (
    !value ||
    !value.length ||
    !value.trim().length ||
    value.trim().length < 3
  )
    return false;
  if (value.trim().length >= 3 && value.trim().length < 30) return true;
  return false;
};
export const isValidDate = (value) => {
  return (value instanceof Date && !isNaN(value.valueOf())) || false;
};
export const isValidCompanyName = (value) => {
  if (!value || !value.length || !value.trim().length) return false;
  return true;
};
export const isValidDesignation = (value) => {
  if (!value || !value.length || !value.trim().length) return false;
  return true;
};
export const isValidDepartment = (value) => {
  if (!value || !value.length || !value.trim().length) return false;
  return true;
};
export const isValidGstNumber = (value) => {
  if (!value || !value.length || !value.trim().length) return false;
  return true;
};
export const isValidUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "https:";
};
export const isValidPhone = (value) => {
  if (value && value.length && value.length === 10 && !isNaN(value))
    return true;
  return false;
};
export const isValidCreditCount = (value) => {
  if (!value || isNaN(value) || value < 10 || value > 300) {
    return false;
  }
  return true;
};
