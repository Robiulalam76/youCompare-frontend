const brandValidation = (brand) => {
  if (brand) return true;
  return false;
};

const modelYearValidation = (model, year) => {
  if (!model || !year) return false;
  else return true;
};

const detailsValidation = (typeofInsurance, idv, firstName, email, phone) => {
  if (!typeofInsurance || !firstName || email || phone) return false;
  else if (typeofInsurance === "comprehensive" && !idv) return false;
  return true;
};
