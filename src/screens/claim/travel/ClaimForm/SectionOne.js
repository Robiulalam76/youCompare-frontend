import React from "react";
// import { CustomTextField as Input } from "../../../components/customStyledComponents/inputs";
// import InputBox from "../../../components/customStyledComponents/InputBox";
import { Grid, Box, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import styles from "../travelClaim.module.css";

const Label = ({ children, width }) => {
    return (
        <Typography
            sx={{
                color: "text.secondary",
                lineHeight: "25px",
                fontWeight: "medium",
                fontSize: ".8rem",
                width: width ? width : 0.3
            }}
        >
            {children}
        </Typography>
    );
};

const InputGrid = ({ children }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            {children}
        </Box>
    )
}

const SectionOne = () => {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{ letterSpacing: "1px", mb: 2 }}
            >
                Details of the plicyholder (insured company)
            </Typography>

            <Grid container>
                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Policy Number</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>
                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Name of company</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Address</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Postcode</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Country</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <Label width={1}>Where does claimant work? Please name branch/subsidiary and location</Label>
                    {/* <InputBase fullWidth multiline className={styles.input} /> */}
                    <InputBase
                        multiline
                        minRows={2}
                        style={{ width: "100%", padding: "4px 8px", fontSize: "14px", marginTop: "4px" }}
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
};

export default SectionOne;
