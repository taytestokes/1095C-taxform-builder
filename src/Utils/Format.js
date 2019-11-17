// Packages
import validator from "validator";

// Checks for valid email format
export const isEmail = email => {
  return validator.isEmail(email);
};

// Checls for alphanumeric format
export const isAlphanumeric = string => {
  return validator.isAlphanumeric(string);
};
