export const renderSmokeLabel = (relationship) => {
  switch (relationship) {
    case "My Partner":
      return "Do your partner smoke?";
    case "Mother":
      return "Do your mother smoke?";
    case "Father":
      return "Do your father smoke?";
    case "Parents":
      return "Any one of your parents smoke?";
    default:
      return "Do you smoke?";
  }
};

export const renderEmploymentLabel = (relationship) => {
  switch (relationship) {
    case "My Partner":
      return "Your partner's employment status";
    case "Mother":
      return "Your mother's employment status";
    case "Father":
      return "Your father's employment status";
    case "Parents":
      return "Your parent's employment status";
    default:
      return "Your employment status";
  }
};

export const renderAgeLabel = (relationship) => {
  switch (relationship) {
    case "My Partner":
      return "Age of your partner (in years)";
    case "Mother":
      return "Age of your mother (in years)";
    case "Father":
      return "Age of your father (in years)";
    default:
      return "Your age (in years)";
  }
};

export const renderGenderLabel = (relationship) => {
  switch (relationship) {
    case "My Partner":
      return "Your partner's gender";
    default:
      return "Your gender";
  }
};