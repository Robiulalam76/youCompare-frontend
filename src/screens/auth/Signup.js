import React, { useState, useEffect } from "react";
// import Navbar from "../../components/Layout/Navbar/index";
// import Footer from "../../components/Layout/Footer";
import AuthLayout from "./AuthLayout";
import { formDiv, form, input, button } from "./styles";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import { Button, Container, Stack, Typography, Box} from "@mui/material";
import { CustomTextField as Input } from "../../components/customStyledComponents/inputs";
import InputBox from "../../components/customStyledComponents/InputBox";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  let history = useHistory();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = "/";

  useEffect(() => {
    if (userInfo) {
    }
  }, [userInfo, message, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
    if (!error) {
      history.push("/");
    }
  };

  return (
    <AuthLayout>
      <Container>
        {/* {error && <h1>{message}</h1>}
        {loading && <h1>{loading}</h1>} */}
        <Box style={formDiv}>
          <form>
            <Typography variant="h3" gutterBottom>Register</Typography>
            <Stack spacing={2}>
              {[
                {
                  label: "Full Name",
                  name: "fullName",
                  type: "text",
                  placeholder: "John Doe",
                  value: name,
                  onChange: setName,
                },
                {
                  label: "Email Address",
                  name: "email",
                  type: "email",
                  placeholder: "john@example.com",
                  value: email,
                  onChange: setEmail,
                },
                {
                  label: "Password",
                  name: "password",
                  type: "password",
                  placeholder: "Enter Password",
                  value: password,
                  onChange: setPassword,
                },
                {
                  label: "Confirm Password",
                  name: "confirmPassword",
                  type: "password",
                  placeholder: "Retype Password",
                  value: confirmPassword,
                  onChange: setConfirmPassword,
                },
              ].map((elem, i) => (
                <InputBox key={i} label={elem.label}>
                  <Input
                    fullWidth
                    onChange={(e) => elem.onChange(e.target.value)}
                    name={elem.name}
                    type={elem.type}
                    value={elem.value}
                    placeholder={elem.placeholder}
                  />
                </InputBox>
              ))}

              <Link className="Link" to="/login">
                <Button
                  variant="contained"
                  className="mainBtn"
                  onClick={(e) => submitHandler(e)}
                  style={{ width: "100%" }}
                  type="submit"
                  style={button}
                >
                  Create Account
                </Button>
              </Link>
            </Stack>
            <div style={{ width: "100%", textAlign: "center" }}>
              <small>
                Already have an account?
                <Link className="Link" to="/login">
                  <span className="linkPera">Login now.</span>
                </Link>
              </small>
            </div>
          </form>
        </Box>
      </Container>
    </AuthLayout>
  );
}
