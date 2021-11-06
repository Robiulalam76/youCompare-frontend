import { Box, ButtonBase } from '@mui/material'

const GroupedButton = ({ text, icon }) => {
  return (
    <Box sx={{ pt: 2, mr: 2 }}>
      <ButtonBase
        sx={{
          padding: 1,
          borderRadius: "50%",
          color: "primary.main",
          bgcolor: "primary.light",
        }}
      >
        {icon}
      </ButtonBase>
      <ButtonBase
        disableRipple
        variant="text"
        sx={{ color: "primary.main", fontSize: ".8rem", mx: 1 }}
      >
        {text}
      </ButtonBase>
    </Box>
  );
};


export default GroupedButton