const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}/;
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

const validateSignUp = (values) => {
  const errors = {};

  //test for firstname validation
  if (!values.firstname) {
    errors.firstname = "This field is required";
  } else if (!nameRegex.test(values.firstname)) {
    errors.firstname = "Invalid value for name";
  }
  //test for lastname validation
  if (!values.lastname) {
    errors.lastname = "This field is required";
  } else if (!nameRegex.test(values.name)) {
    errors.lastname = "Invalid value for name";
  }
  //test for email
  if (!values.email) {
    errors.email = "This field is require";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid entry for email";
  }

  //test for password regex
  if (!values.password) {
    errors.password = "This field id required";
  } else if (!passwordRegex.test(values.password)) {
    errors.password = "Must contain a number and greater than 6";
  }

  return errors;
};
export default validateSignUp;
