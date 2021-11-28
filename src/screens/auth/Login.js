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

export default function Login({ location, setIsLoggedin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  let history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location?.search ? location?.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  // console.log("email password", email, password);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email password", email, password);
    dispatch(login(email, password));

    // localStorage.setItem("login", true);

    // history.push("/");
  };

  const google = () => {
    window.open(
      "http://localhost:5000/auth/google",
      "_blank",
      "resizable=yes, scrollbars=yes, titlebar=yes, width=800, height=900, top=10, left=10"
    );
    // window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <AuthLayout>
      <Container>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
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
                      elem.name === "password" && {
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
              <button
                variant="contained"
                className="googleBtn"
                onClick={google}
                // type="submit"
                style={button}
              >
                Google
              </button>
              <button
                variant="contained"
                className="facebookBtn"
                onClick={(e) => submitHandler(e)}
                // type="submit"
                style={button}
              >
                Facebook
              </button>
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
