const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}/;


const validateSignUp = (values) => {
  const errors = {};
  //test for email
  if (!values.email) {
    errors.email = "This field is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid entry for email";
  }

  //test for password regex
  if (!values.password) {
    errors.password = "This field id required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Must contain a number, must be greater then 6";
  }

  return errors;
};
export default validateSignUp;
