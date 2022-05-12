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

const InputGrid = ({ children }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            {children}
        </Box>
    )
}

const SectionFive = () => {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{ letterSpacing: "1px", mb: 2 }}
            >
                A. Details of calcellation:
            </Typography>

            <Grid container>
                <Grid item xs={12}>

                    <Label>Reason for cancellation (e.g. strike, weather, employee resigned, illness etc)</Label>
                    <InputBase fullWidth className={styles.input} />

                </Grid>
                <Grid item xs={12}>

                    <Label>Total cost of trip</Label>
                    <InputBase fullWidth className={styles.input} />

                </Grid>

                <Grid item xs={12}>

                    <Label>Date Travel Agent/Tour Operator/Airline notified of cancellation (if applicable)</Label>
                    <InputBase fullWidth className={styles.input} />

                </Grid>

                <Grid item xs={12}>

                    <Label>What refud, if any, has been made or to be made to you by your Travel Agent/Tour Operator/Airline?</Label>
                    <InputBase fullWidth className={styles.input} />

                </Grid>

                <Grid item xs={12}>

                    <Label>Country where accident occurred</Label>
                    <InputBase fullWidth className={styles.input} />

                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SectionFive;
