import { Typography } from "@mui/material";
const CopyrightText = () => {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        lineHeight: "24px",
        fontWeight: 400,
        color: "text.primary",
        pt: 2,
        pb: 3,
        textAlign: "center",
      }}
    >
      Copyright <span style={{ fontSize: "14px" }}>&copy;</span> 2021, All
      rights reserved by YouCompare
    </Typography>
  );
};

export default CopyrightText;
