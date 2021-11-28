export const nameValidation = (name) => {
  if (!name || name.length < 3) {
    return "Name is required.";
  } else {
    return "";
  }
};

export const emailValidation = (email) => {
  if (!email) {
    return "Email is required.";
  } else if (!/@/.test(email)) {
    return "Email should contain @ sign.";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "Invalid email address.";
  } else {
    return "";
  }
};

export const phoneValidation = (phone) => {
  if (!phone) {
    return "Phone number is required.";
  } else {
    return "";
  }
};

export const inputValidation = (input) => {
  if (!input) {
    return "Field is required.";
  } else {
    return "";
  }
};
