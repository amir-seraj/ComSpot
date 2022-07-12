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
import { validateRegisterForm } from "./../../../utils/validators";
import { getActions } from "../../../store/actions/authActions";
import { connect } from "react-redux";

function Register({ register }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ email, password, username }));
  }, [email, password, username, setIsFormValid]);

  const redirectToLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    const userDetails = { email, password, username };
    register(userDetails, navigate);
  };
  const Form = [
    {
      id: 1,
      value: email,
      setValue: setEmail,
      label: "Email",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      id: 2,
      value: password,
      setValue: setPassword,
      label: "Password",
      type: "text",
      placeholder: "Enter your password",
    },
    {
      id: 3,
      value: username,
      setValue: setUsername,
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
    },
  ];
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: "white" }}>
        Create an account
      </Typography>
      <Typography variant="" sx={{ color: "#b9bbbe" }}>
        We are happy that you chose us.
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
          !isFormValid
            ? "Username should contains between 3 to 12 characters, Password should be between 6 to 12 characters, Also correct Email should be provided."
            : "Press to Register"
        }
        style={{ width: "100%" }}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "40px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text="Already have an account? "
        additionalStyles={{ marginTop: "5px" }}
        redirectHandler={redirectToLogin}
        redirectText="Login"
      />
    </AuthBox>
  );
}

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(null, mapActionsToProps)(Register);
