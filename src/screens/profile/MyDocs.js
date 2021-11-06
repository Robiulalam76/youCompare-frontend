import React from "react";

// material ui
import { Grid, Typography } from "@mui/material";

// react-icons
import { FiDownload } from "react-icons/fi";

// styled components
import { ShadowedBox, LogoBox, ColumnFlexBox } from "./styles";
import { Title, Subtitle } from "../../components/customStyledComponents/texts";

// components
import ProfileLayout from "./ProfileLayout";
import GroupedButton from "./GroupedButton";

export default function MyDocs(props) {
  return (
    <ProfileLayout>
      <Grid item xs={12}>
        <Title>My Documents</Title>
      </Grid>
      <Grid item container spacing={2} xs={12}>
        {[...new Array(6)].map((elem, i) => (
          <Grid item xs={12} sm={6} key={i}>
            <DocumentCard />
          </Grid>
        ))}
      </Grid>
    </ProfileLayout>
  );
}

const DocumentCard = () => {
  return (
    <ShadowedBox sx={{ width: "inherit", display: "flex", mb: 0 }}>
      <LogoBox></LogoBox>
      <ColumnFlexBox sx={{ ml: 1 }}>
        <Typography variant="h5">Document Name</Typography>
        <GroupedButton
          text="Download"
          icon={<FiDownload style={{ fontSize: "14px" }} />}
        />
      </ColumnFlexBox>
    </ShadowedBox>
  );
};
