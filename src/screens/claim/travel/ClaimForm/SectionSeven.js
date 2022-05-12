import React from "react";
// import { CustomTextField as Input } from "../../../components/customStyledComponents/inputs";
// import InputBox from "../../../components/customStyledComponents/InputBox";
import { Grid, Box, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import styles from "../travelClaim.module.css";

const Label = ({ children }) => {
    return (
        <Typography
            sx={{
                color: "text.secondary",
                lineHeight: "25px",
                fontWeight: "medium",
                fontSize: ".8rem",
                mt: .5
            }}
        >
            {children}
        </Typography>
    )
}

// const InputGrid = ({ children }) => {
//     return (
//         <Box sx={{ display: "flex", mb: 2 }}>
//             {children}
//         </Box>
//     )
// }

const SectionSix = () => {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{ letterSpacing: "1px", mb: 2 }}
            >
                C. Details of travel delay (if applicable)
            </Typography>

            <Grid container>
                <Grid item xs={12}>
                    <Label>Date of delay</Label>
                    <InputBase fullWidth className={styles.input} />
                </Grid>
                <Grid item xs={12}>
                    <Label>Reason for delay</Label>
                    <InputBase fullWidth className={styles.input} />
                </Grid>

                <Grid item xs={12}>
                    <Label>Departing airport, station or port (or transit airport, station or port if delay in transit) </Label>
                    <InputBase fullWidth className={styles.input} />
                </Grid>

                <Grid item xs={12}>
                    <Label width={1}>Flight/Train/Ship number</Label>
                    <InputBase fullWidth className={styles.input} />
                </Grid>

                <Grid item xs={12}>
                    <Label width={1}>Flight/Train/Ship Operator</Label>
                    <InputBase fullWidth className={styles.input} />
                </Grid>

                <Grid item xs={12}>
                    <Label width={1}>Total time delayed at airport, port or station (days, hours)</Label>
                    <InputBase fullWidth className={styles.input} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SectionSix;
