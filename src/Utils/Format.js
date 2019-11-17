// Packages
import validator from "validator";

// Checks for valid email format
export const isEmail = email => {
  return validator.isEmail(email);
};
