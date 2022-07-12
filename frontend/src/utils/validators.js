export const validateLoginForm = ({ email, password }) => {
  return validateEmail(email) && validatePassword(password);
};
export const validateRegisterForm = ({ email, password, username }) => {
  return (
    validateEmail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};
const validatePassword = (password) => {
  return password.length > 6 && password.length < 12;
};
const validateEmail = (email) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regexEmail.test(email);
};
const validateUsername = (username) => {
  return username.length > 3 && username.length < 12;
};
