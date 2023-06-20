import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Grid,
  Button,
  Collapse,
  ButtonBase,
} from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { claimSteps, docsChecklist, questions } from "./data";
import { BsFileEarmarkCheck, BsArrowDownCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
// import { Rotate90DegreesCcw } from '@mui/icons-material';

//components
import DisplayCard from "./DisplayCard";
import Assistance from "./Assistance";
import { Link } from "react-router-dom";

export default function Instructions({ setShowForm }) {
  const onShowForm = () => {
    setShowForm(true);
  };

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Grid container justifyContent="center">
          {/* Claim Process Section */}
          <DisplayCard>
            <Link to="/claim">
              <button className={styles.iconButton}>
                <HiOutlineArrowLeft style={{ fontSize: "16px" }} />
              </button>
            </Link>
            <h2 className={styles.title}>Claim Process</h2>
            <p className={styles.subtitle}>Health Insurance</p>
            <Stepper orientation="vertical" sx={{ mt: 2 }}>
              {claimSteps.map((step) => (
                <Step active={true} key={step.id}>
                  <StepLabel>
                    <p className={styles.label}>{step.label}</p>
                  </StepLabel>
                  <StepContent>
                    <p className={styles.text}>{step.text}</p>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </DisplayCard>
          {/* Documents Checklist Section */}
          <DisplayCard>
            <h2 className={styles.title} style={{ marginBottom: "12px" }}>
              Essential Documents Checklist for Insurance Claims
            </h2>
            <p className={styles.checklistText}>
              Discover the comprehensive documents checklist for insurance
              claims to ensure a smooth and successful claim process. Whether
              you require a few or all of these documents, our guide will help
              you understand the essential requirements and provide helpful tips
              for submitting your claim.
            </p>
            <ul className={styles.checklist}>
              {docsChecklist.map((item) => (
                <li key={item} className={styles.checklistItem}>
                  <BsFileEarmarkCheck
                    style={{
                      marginRight: "8px",
                      color: "green",
                      fontSize: "16px",
                    }}
                  />
                  <p className={styles.checklistText}>{item}</p>
                </li>
              ))}
            </ul>
          </DisplayCard>

          <DisplayCard>
            <h2 className={styles.title}>Frequently asked questions</h2>
            {questions.map((q) => (
              <FAQ key={q.id} question={q.question} answer={q.answer} />
            ))}
          </DisplayCard>
        </Grid>
        <br />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container justifyContent="center">
          <Assistance>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginTop: "2rem" }}
              onClick={onShowForm}
            >
              Submit Claim Form Now
            </Button>
          </Assistance>
        </Grid>
      </Grid>
    </Grid>
  );
}

const FAQ = (props) => {
  const [open, setOpen] = React.useState(false);
  const deg = open ? "180" : "0";
  return (
    <>
      <div className={styles.faq}>
        <div className={styles.question} onClick={() => setOpen(!open)}>
          <h4 className={styles.label}>{props.question}</h4>
          <div className={styles.iconParent}>
            <BsArrowDownCircle
              className={styles.icon}
              style={{ transform: `rotate(${open ? "180" : "0"}deg)` }}
            />
          </div>
        </div>
        <Collapse in={open}>
          <p className={styles.checklistText}>{props.answer}</p>
        </Collapse>
      </div>
    </>
  );
};
