export const validateLoginForm = ({ email, password }) => {
  console.log(validateEmail(email) && validatePassword(password));
  return validateEmail(email) && validatePassword(password);
};
const validatePassword = (password) => {
  console.log(`pass ${password.length > 6 && password < 12}`);
  return password.length > 6 && password.length < 12;
};
const validateEmail = (email) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(`email${regexEmail.test(email)}`);
  return regexEmail.test(email);
};
