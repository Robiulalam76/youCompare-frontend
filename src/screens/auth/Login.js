import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Layout/Navbar/index";
// import Footer from "../../components/Layout/Footer";
import AuthLayout from "./AuthLayout";
import { formDiv, form, input, button } from "./styles";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useHistory } from "react-router-dom";

import "./auth.css";
import {
  Button,
  Container,
  Typography,
  Stack,
  InputAdornment,
  Box,
} from "@mui/material";
import InputBox from "../../components/customStyledComponents/InputBox";
import { CustomTextField as Input } from "../../components/customStyledComponents/inputs";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export default function Login({ location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = "/";

  useEffect(() => {
    if (userInfo) {
    }
  }, [userInfo, redirect]);

  // console.log("email password", email, password);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email password", email, password);
    dispatch(login(email, password));
    history.push("/");
  };

  return (
    <AuthLayout>
      <Container>
        <Box style={formDiv}>
          <form>
            <Typography variant="h3" gutterBottom>
              Login
            </Typography>
            <Stack spacing={2}>
              {[
                {
                  label: "Email Address",
                  type: "email",
                  name: "email",
                  placeholder: "someone@domain.com",
                  value: email,
                  onChange: setEmail,
                },
                {
                  label: "Password",
                  type: showPassword ? "text" : "password",
                  name: "password",
                  placeholder: "Enter Password",
                  value: password,
                  onChange: setPassword,
                },
              ].map((elem) => (
                <InputBox label={elem.label}>
                  <Input
                    fullWidth
                    type={elem.type}
                    value={elem.value}
                    onChange={(e) => elem.onChange(e.target.value)}
                    placeholder={elem.placeholder}
                    InputProps={
                      elem.name === "password"
                        ? {
                            endAdornment: (
                              <InputAdornment
                                position="end"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <AiOutlineEye style={{ cursor: "pointer" }} />
                                ) : (
                                  <AiOutlineEyeInvisible
                                    style={{ cursor: "pointer" }}
                                  />
                                )}
                              </InputAdornment>
                            ),
                          }
                        : null
                    }
                  />
                </InputBox>
              ))}

              <Button
                variant="contained"
                className="mainBtn"
                onClick={(e) => submitHandler(e)}
                // type="submit"
                style={button}
              >
                Login
              </Button>
            </Stack>

            <div style={{ width: "100%", textAlign: "center" }}>
              <small>
                New User?
                <Link className="Link" to="/signup">
                  <span className="linkPera">Create an account</span>
                </Link>
              </small>
            </div>

            {/* <button type="submit" style={button}>
              Signup
            </button> */}
          </form>
        </Box>
      </Container>
    </AuthLayout>
  );
}
