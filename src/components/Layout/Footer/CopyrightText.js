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
      Copyright <span style={{ fontSize: "14px" }}>&copy;</span> {new Date().getFullYear()}, All
      rights reserved by hilltopcompare
    </Typography>
  );
};

export default CopyrightText;
