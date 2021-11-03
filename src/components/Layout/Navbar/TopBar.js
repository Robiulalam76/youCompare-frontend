import React from "react";
import styles from "./styles.module.css";
import { Container, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { Box } from "@mui/system";

export default function TopBar() {
  const insurances = [
    "Auto Insurance",
    "Health Insurance",
    "Travel Insurance",
    "Life Insurance",
  ];
  return (
    <div className={styles.topbar}>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div className={styles.logoText}>
            <MdEmail style={{ color: "gray" }} />
            <Typography
              variant="caption"
              sx={{ px: 1 }}
              className={styles.textColor}
            >
              youcompare@gamil.com
            </Typography>
          </div>
          <div className={styles.logoText}>
            <AiTwotonePhone style={{ color: "gray" }} />
            <Typography
              variant="caption"
              sx={{ px: 1 }}
              className={styles.textColor}
            >
              01712-8787878
            </Typography>
          </div>
        </div>
        <div>
          {insurances.map((elem, i) => (
            <Typography
              variant="caption"
              sx={{ pl: 2 }}
              className={styles.textColor}
            >
              {elem}
            </Typography>
          ))}
        </div>
      </Container>
    </div>
  );
}
