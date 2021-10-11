import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { formDiv, form, input, button } from "./styles";

import { Container } from "../../components/styledComponents";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

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

  console.log("email password", email, name, confirmPassword, password);
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
    <React.Fragment>
      <Container>
        <Navbar />
        {error && <h1>{message}</h1>}
        {loading && <h1>{loading}</h1>}
        <div style={formDiv}>
          <form style={form}>
            <h3>Create Account</h3>
            <Input
              label="Full Name"
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
            />
            <Input
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
            />
            <Input
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type password"
            />
            <Input
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Retype password"
            />
            <Link to="/login">
              <button
                className="mainBtn"
                onClick={(e) => submitHandler(e)}
                style={{ width: "100%" }}
                type="submit"
                style={button}
              >
                Create Account
              </button>
            </Link>
          </form>
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

const Input = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props} style={input} />
    </>
  );
};
