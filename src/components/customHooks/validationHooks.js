import React from "react";

// Full Name Validation Hook
export function useNameValidation(name) {
  const [error, setError] = React.useState("");

  const handleError = () => {
    if (!name) setError("Name is required.");
    else if (name.length < 5)
      setError("Name should contain at least 5 charecters.");
    else setError("");
  };

  return [error, handleError];
}

// Email Validation Hook
export function useEmailValidation(email) {
  const [error, setError] = React.useState("");

  const handleError = () => {
    if (!email) setError("Email is required.");
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      setError("Invalid email address.");
    else setError("");
  };
  return [error, handleError];
}

// Phone Validation Hook
export function usePhoneValidation(phone) {
  const [error, setError] = React.useState("");

  const handleError = () => {
    if (!phone) setError("Phone number is required.");
    else setError("");
  };
  return [error, handleError];
}

// Input Validation Hook
export function useInputValidation(input) {
  const [error, setError] = React.useState("");

  const handleError = () => {
    if (!input) setError("Required field.");
    else setError("");
  };
  return [error, handleError];
}

// Date of birth validation
export function useDateOfBirthValidation(date) {
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!date) return;
    checkAge();
  }, [date]);

  const checkAge = () => {
    if (date.toString() === "Invalid Date") setError("Invalid Date");
    if (date.toString() !== "Invalid Date") {
      const age = ageCalculator(date);
      if (age > 0 && age < 100) setError("");
      else setError(`You can't be ${age} years old!`);
    }
  };

  const handleValidity = () => {
    if (!date) setError("Required field");
    else if (date > new Date()) setError("Invalid Date of Birth");
    else checkAge();
  };

  return [error, handleValidity];
}

export function useDateValidation(date) {
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    if (!date) return;
  }, [date]);

  const handleError = () => {
    if (!date) setError("Required field.");
    else if (date.toString() === "Invalid Date") setError("Invalid Date");
    else if (date.toString() !== "Invalid Date") setError("");
  };
  return [error, handleError];
}

const ageCalculator = (dob) => {
  try {
    //calculate month difference from current date in time
    let month_diff = Date.now() - dob.getTime();

    //convert the calculated difference in date format
    let age_dt = new Date(month_diff);

    //extract year from date
    let year = age_dt.getUTCFullYear();

    //now calculate the age of the user
    let age = Math.abs(year - 1970);
    return age;
  } catch (error) {
    console.log("DEVELOPMENT ERROR: ", error);
  }
};
