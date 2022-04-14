import { Grid, InputBase, Typography, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import { BiCheck } from "react-icons/bi";
import "../style.css";

// car images
import BMW from "../../../accets/brandLogo/bmw.png";
import Honda from "../../../accets/brandLogo/honda.png";
import Audi from "../../../accets/brandLogo/Audi.png";
import Mercedes from "../../../accets/brandLogo/Mercedes-Benz.png";
import Ford from "../../../accets/brandLogo/ford.png";
import Mini from "../../../accets/brandLogo/Mini.png";
import Chevrolet from "../../../accets/brandLogo/Chevrolet.png";

// truck images
import DAF from "../../../accets/truck/DAF.png";
import ford from "../../../accets/truck/ford.png";
import IvecoLogo from "../../../accets/truck/Iveco-logo.png";
import man from "../../../accets/truck/man.jpg";
import MercedesT from "../../../accets/truck/Mercedes-Benz.png";
import Renault from "../../../accets/truck/Renault-logo.png";
import Scania from "../../../accets/truck/Scania-logo.png";

// Van images
import Fiat from "../../../accets/bus_van/Fiat-Logo.png";
import fordV from "../../../accets/bus_van/ford-logo-2017.png";
import IvecoLogoV from "../../../accets/bus_van/Iveco-logo.png";
import MercedesV from "../../../accets/bus_van/Mercedes-benz.jpg";
import Peugeot from "../../../accets/bus_van/Peugeot.png";
import RenaultV from "../../../accets/bus_van/Renault-logo.png";
import Volkswagen from "../../../accets/bus_van/Volkswagen.png";

//3wheeler images
import tvs from "../../../accets/3wheeler/bajaj.png";
import bajaj from "../../../accets/3wheeler/BajajL.jpg";

//2wheeler images
import aprilia from "../../../accets/2wheelers/aprilia.png";
import bajaj2 from "../../../accets/2wheelers/bajaj.png";
import ford2 from "../../../accets/2wheelers/ford.png";
import harley from "../../../accets/2wheelers/harley.jpg";
import honda2 from "../../../accets/2wheelers/honda.png";
import Ducati from "../../../accets/2wheelers/images.png";
import kawasaki from "../../../accets/2wheelers/kawasaki.jpg";
import royalE from "../../../accets/2wheelers/royalE.png";
import Suzuki from "../../../accets/2wheelers/Suzuki.png";
import vespa from "../../../accets/2wheelers/vespa.png";
import yamaha from "../../../accets/2wheelers/yamaha.png";

import InputBox from "../../customStyledComponents/InputBox";
import { CustomTextField as TextField } from "../../customStyledComponents/inputs";
import { styled } from "@mui/system";
import { useEffect } from "react";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: theme.spacing(1, 0),
  [theme.breakpoints.only("xs")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

// /home/auto/commercial/truck
let brands = [];

function BrandForm() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, carNo } = autoQuery;

  // Default Brand Selection during initial rendering
  // React.useEffect(() => {
  //   dispatch({
  //     type: FIELD_CHANGE,
  //     payload: { field: "brand", value: "BMW" },
  //   });
  // }, []);

  React.useEffect(() => {}, [window.location.pathname]);

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  console.log(`URL from Brands : `, window.location.pathname);
  if (window.location.pathname === "/home/auto/commercial/car") {
    brands = [
      {
        name: "Honda",
        image: Honda,
      },
      {
        name: "BMW",
        image: BMW,
      },
      {
        name: "Audi",
        image: Audi,
      },
      {
        name: "Mercedes-Benz",
        image: Mercedes,
      },
      {
        name: "Ford",
        image: Ford,
      },
      {
        name: "Mini",
        image: Mini,
      },
      {
        name: "Chevrolet",
        image: Chevrolet,
      },
    ];
  }
  if (window.location.pathname === "/home/auto/commercial/truck") {
    brands = [
      {
        name: "DAF",
        image: DAF,
      },
      {
        name: "Ford",
        image: ford,
      },
      {
        name: "IvecoLogo",
        image: IvecoLogo,
      },
      {
        name: "Man",
        image: man,
      },
      {
        name: "Mercedes-Benz",
        image: MercedesT,
      },
      {
        name: "Renault",
        image: Renault,
      },
      {
        name: "Scania",
        image: Scania,
      },
    ];
  }
  if (window.location.pathname === "/home/auto/commercial/bus_van") {
    brands = [
      {
        name: "Fiat",
        image: Fiat,
      },
      {
        name: "Peugeot",
        image: Peugeot,
      },
      {
        name: "Iveco",
        image: IvecoLogoV,
      },
      {
        name: "Mercedes-Benz",
        image: MercedesV,
      },
      {
        name: "Ford",
        image: fordV,
      },
      {
        name: "Renault",
        image: RenaultV,
      },
      {
        name: "Chevrolet",
        image: Chevrolet,
      },
      {
        name: "Volkswagen",
        image: Volkswagen,
      },
    ];
  }
  if (window.location.pathname === "/home/auto/private") {
    brands = [
      {
        name: "Private",
        image: BMW,
      },
      {
        name: "Honda",
        image: Honda,
      },
      {
        name: "Audi",
        image: Audi,
      },
      {
        name: "Mercedes-Benz",
        image: Mercedes,
      },
      {
        name: "Ford",
        image: Ford,
      },
      {
        name: "Mini",
        image: Mini,
      },
      {
        name: "Chevrolet",
        image: Chevrolet,
      },
    ];
  }
  if (window.location.pathname === "/home/auto/three-wheeler") {
    brands = [
      {
        name: "TVS",
        image: tvs,
      },
      {
        name: "Bajaj",
        image: bajaj,
      },
    ];
  }
  if (window.location.pathname === "/home/auto/two-wheeler") {
    brands = [
      {
        name: "Aprilia",
        image: aprilia,
      },
      {
        name: "Bajaj",
        image: bajaj2,
      },
      {
        name: "Harley",
        image: harley,
      },
      {
        name: "Honda",
        image: honda2,
      },
      {
        name: "Ford",
        image: ford2,
      },
      {
        name: "Ducati",
        image: Ducati,
      },
      {
        name: "RoyalE",
        image: royalE,
      },
      {
        name: "Kawasaki",
        image: kawasaki,
      },
      {
        name: "Suzuki",
        image: Suzuki,
      },
      {
        name: "Vespa",
        image: vespa,
      },
      {
        name: "Yamaha",
        image: yamaha,
      },
    ];
  }

  useEffect(() => {}, [window.location.pathname]);

  return (
    <div
    // style={{
    //   border:
    //     window.location.pathname === "/home/auto/commercial/car"
    //       ? "1px solid red "
    //       : "1px solid blue",
    // }}
    >
      <form>
        <ResponsiveBox>
          <InputBox label="Select Brand">
            <TextField
              type="text"
              fullWidth
              name="brand"
              value={brand}
              onChange={handleChange}
              placeholder="Brand Name"
            />
          </InputBox>

          <InputBox label="Enter Number Plate">
            <TextField
              type="text"
              fullWidth
              value={carNo}
              name="carNo"
              placeholder="e.g. DH897KL788"
              onChange={handleChange}
            />
          </InputBox>
        </ResponsiveBox>

        {/* <Typography variant="body2" color="text.hover" sx={{ px: 2, mt: 6 }}>
          OR
        </Typography> */}
      </form>

      <Grid container>
        {brands.map((elem, i) => (
          <Grid
            item
            lg={3}
            xl={2}
            md={4}
            sm={4}
            xs={6}
            key={i}
            onClick={() => {
              dispatch({
                type: FIELD_CHANGE,
                payload: {
                  field: "brand",
                  value: elem.name,
                },
              });
            }}
          >
            <div
              className="brandname"
              style={{
                border:
                  brand.toLowerCase() === elem.name.toLowerCase() &&
                  "1px solid #6094f3",
                position: "relative",
              }}
            >
              {/* <p>{elem.name}</p> */}
              <img
                style={{ height: "15vh", objectFit: "contain" }}
                src={elem.image}
              />
              {brand.toLowerCase() === elem.name.toLowerCase() && (
                <span className="right">
                  <BiCheck />
                </span>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BrandForm;
