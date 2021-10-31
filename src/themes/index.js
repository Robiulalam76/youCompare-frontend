import { createTheme } from "@mui/material/styles";

export function theme(customization) {
  const primaryMain = "#1482D2";
  const secondaryMain = "#F5AB0C";
  const shadowColor = "#2c27380a";

  return createTheme({
    palette: {
      background: {
        white: "#ffffff",
        primary: "#1482D2",
        secondary: "#F5AB0C",
        black: "rgb(0,0,0)",
        auto: "#FFDFD2",
        life: "#D4E5FB",
        travel: "#FDEDC9",
        health: "#FFDAED",
      },
      primary: {
        main: primaryMain,
        light: "#e9eff5" // blue
      },
      secondary: {
        main: secondaryMain, // yellow
      },
      pink: {
        main: "#F85276", // pink
        light: "#FFE9EE",
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "#707070",
        hover: "#B6B6B6",
        disabled: "#CECECE",
        nav: "#2A2B40",
      },
      error: {
        main: "#EF392E",
      },
      success: {
        main: "#57BC3C",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 600,
      },
      h3: {
        fontWeight: 600,
        fontSize: 24,
      },
      h4: {
        fontWeight: 600,
        fontSize: 20,
      },
      h5: {
        fontWeight: 600,
        fontSize: 16,
      },
      h6: {
        fontWeight: 600,
        fontSize: 14,
      },
      subtitle1: {
        fontWeight: 400,
      },
      subtitle2: {
        fontWeight: 400,
      },
      caption: {
        fontWeight: 400,
      },
      body1: {
        fontWeight: 500,
      },
      body2: {
        fontWeight: 500,
        fontSize: 14,
      },
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            boxShadow: `0px 4px 8px ${shadowColor}`,
            border: "1px solid #dbe2ea",
            borderRadius: "6px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            border: "none",
          },
          notchedOutline: {
            borderColor: "#dbe2ea"
          }
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Poppins",
            color: "rgba(0,0,0,.9)"
          },
        },
      },
      MuiAutocomplete: {
        input: {
          padding: "28px",
        },
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "round" },
            style: {
              textTransform: "none",
              borderRadius: "50px",
              fontsize: "12px",
              fontFamily: "Poppins",
              fontWeight: 400,
            },
          },
          {
            props: { variant: "round", color: "text" },
            style: {
              backgroundColor: "transparent",
              color: "#B6B6B6",
              border: `1px solid #CECECE`,
              fontSize: "12px",
            },
          },
          {
            props: { variant: "round", color: "primary" },
            style: {
              backgroundColor: primaryMain,
              fontsize: "12px",
              fontWeight: 400,
              color: "#FFFFFF",
              border: `1px solid ${primaryMain}`,
              "&:hover": {
                backgroundColor: primaryMain,
              },
            },
          },
          {
            props: { variant: "round", color: "secondary" },
            style: {
              backgroundColor: secondaryMain,
              color: "#FFFFFF",
              fontSize: "12px",
              border: `1px solid ${secondaryMain}`,
              "&:hover": {
                backgroundColor: secondaryMain,
              },
            },
          },
          {
            props: { variant: "round", size: "small" },
            style: {
              padding: "2px 12px",
              fontSize: "12px"
            },
          },
        ],
      },
    },
  });
}
