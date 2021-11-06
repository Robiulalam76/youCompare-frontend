import * as React from "react";

// material ui
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/system";

// mui styled components
import { Title } from "../../components/customStyledComponents/texts";
import {
  RedButton,
  GreenButton,
} from "../../components/customStyledComponents/buttons";
import { ShadowedBox, LogoBox, SecondaryText, ColumnFlexBox } from "./styles";

// react-icons
import { FiDownload } from "react-icons/fi";
import { FaRegHandPaper } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

// components
import ProfileLayout from "./ProfileLayout";
import GroupedButton from "./GroupedButton";

export default function MyPolicies(props) {
  return (
    <ProfileLayout>
      <Grid item xs={12} sm={10} md={12}>
        <Title>My Policies</Title>
      </Grid>
      {[...new Array(3)].map((elem, i) => (
        <Grid item xs={12} sm={10} md={12} key={i}>
          <Card />
        </Grid>
      ))}
    </ProfileLayout>
  );
}

const Card = (props) => {
  return (
    <ShadowedBox>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <LogoBox></LogoBox>
          <ColumnFlexBox sx={{ ml: 2 }}>
            <SecondaryText>Comprehensive Plan</SecondaryText>
            <Typography variant="h4">Honda 190</Typography>
            <SecondaryText>HON398493</SecondaryText>
          </ColumnFlexBox>
        </Box>
        <ColumnFlexBox sx={{ ml: "auto" }}>
          <RedButton>Expired, 25 Sep'21</RedButton>
          {/* <GreenButton>Expires in 5 years</GreenButton> */}
          <SecondaryText>YCKSI2496494584</SecondaryText>
        </ColumnFlexBox>
      </Box>

      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <GroupedButton
          text="Download Policy"
          icon={<FiDownload style={{ fontSize: "14px" }} />}
        />
        <GroupedButton
          text="Claim Policy"
          icon={<FaRegHandPaper style={{ fontSize: "14px" }} />}
        />
        <GroupedButton
          text="Renew Now"
          icon={<AiOutlineShoppingCart style={{ fontSize: "14px" }} />}
        />
      </Box>
    </ShadowedBox>
  );
};

// Buttons
