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

const SectionFour = () => {
    return (
        <React.Fragment>
            <Typography
                variant="h5"
                sx={{ letterSpacing: "1px", mb: 2 }}
            >
                Details of the trip:
            </Typography>

            <Grid container>
                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Travel Destinaton</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>
                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Scheduled trip dates</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label width={1}>Travel Order Number (if applicable)</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label>Reason for Travel</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>

                <Grid item xs={12}>
                    <InputGrid>
                        <Label width={1}>Country where accident occurred</Label>
                        <InputBase fullWidth className={styles.input} />
                    </InputGrid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SectionFour;
