import React from "react";

export function useNameValidation(name) {
  const [validity, setValidity] = React.useState({ valid: true, error: "" });

  const handleValidity = () => {
    if (!name) {
      setValidity({ validity: false, error: "Name is required." });
    } else if (name.length < 4) {
      setValidity({
        valid: false,
        error: "Name should at least 3 charecters.",
      });
    } else {
      setValidity({
        valid: true,
        error: "",
      });
    }
  };

  return [validity, handleValidity];
}

export function useEmailValidation(email) {
  const [validity, setValidity] = React.useState({ valid: true, error: "" });
  const ref = React.useRef(false);

  // if we need to check error on every input change
  // React.useEffect(() => {
  //   if (ref.current === false) return;
  //   handleValidity();
  // }, [email]);

  const handleValidity = () => {
    //ref.current = true;

    if (!email) {
      setValidity({ valid: false, error: "Email is required." });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setValidity({ valid: false, error: "Invalid email address." });
    } else {
      setValidity({ valid: true, error: "" });
    }
  };
  return [validity, handleValidity];
}

export function usePhoneValidation(phone) {
  const [validity, setValidity] = React.useState({ valid: true, error: "" });

  const handleValidity = () => {
    if (!phone) {
      setValidity({ valid: false, error: "Phone number is re quired." });
    }
  };
  return [validity, handleValidity];
}
