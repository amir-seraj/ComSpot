import React, { useState } from "react";
import {
  AuthBox,
  CustomPrimaryButton,
  InputComp,
  RedirectInfo,
} from "../../../components";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { useEffect } from "react";
import { validateLoginForm } from "./../../../utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateLoginForm({ email, password }));
  }, [email, password, setIsFormValid]);

  const redirectToRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    const userDetails = { email, password };
    login(userDetails, navigate);
  };
  const Form = [
    {
      id: 1,
      value: email,
      setValue: setEmail,
      label: "Email",
      type: "email",
      placeholder: "Enter email address",
    },
    {
      id: 2,
      value: password,
      setValue: setPassword,
      label: "Password",
      type: "text",
      placeholder: "Enter password",
    },
  ];
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Welcome Back!
      </Typography>
      <Typography variant="" sx={{ color: "#b9bbbe" }}>
        We are happy that you are with us.
      </Typography>
      {Form.map((item) => (
        <InputComp
          value={item.value}
          setValue={item.setValue}
          label={item.label}
          type={item.type}
          placeholder={item.placeholder}
          key={item.id}
        />
      ))}

      <Tooltip
        title={
          !isFormValid ? "Enter correct Email and Password" : "Press to login"
        }
        style={{ width: "100%" }}
      >
        <div>
          <CustomPrimaryButton
            label="login"
            additionalStyles={{ marginTop: "40px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Need an account? "
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={redirectToRegister}
        redirectText="Create an account"
      />
    </AuthBox>
  );
}
const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(null, mapActionsToProps)(Login);
