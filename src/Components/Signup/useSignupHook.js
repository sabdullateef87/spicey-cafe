import { useState, useEffect } from "react";

const useSigupHook = (initialValues, validateSignUp) => {
  const [values, setValues] = useState(initialValues);
  const [validationError, setValidationError] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // useEffect(() => {
  //   if (isSubmitted) {
  //     if (Object.keys(validationError) === 0) {
  //       console.log("values");
  //       setIsSubmitted(false);
  //     }
  //   } else {
  //     setIsSubmitted(false);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [validationError]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setValidationError(validateSignUp(values));
    // console.log(Object.keys(validationError));
    if (Object.keys(validationError).length !== 0) {
      setIsSubmitted(false);
      setValidationError(validateSignUp(values));
      console.log(validationError);
      console.log(isSubmitted)
    } else {
      setIsSubmitted(true);
    }
  };

  return [values, handleChange, handleSubmit, validationError, isSubmitted];
};

export default useSigupHook;
