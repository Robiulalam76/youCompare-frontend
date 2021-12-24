import React from "react";
import styles from "./styles.module.css";
import { Container, Typography } from "@mui/material";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function TopBar() {
  const insurances = [
    { title: "Auto Insurance", link: "/home/auto" },
    { title: "Health Insurance", link: "/home/health" },
    { title: "Travel Insurance", link: "/home/travel" },
    { title: "Life Insurance", link: "/home/life" },
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
            <Link to={elem.link} key={i}>
              <Typography
                variant="caption"
                sx={{ pl: 2 }}
                className={styles.textColor}
              >
                {elem.title}
              </Typography>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
