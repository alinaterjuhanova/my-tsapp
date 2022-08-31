import { useState } from "react";
import styled from "styled-components";
import ForgotPwdForm from "../../components/Auth/ForgotPwdForm";
import LoginForm from "../../components/Auth/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm";
import { colors, devices } from "../../theme/theme";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.darkViolet};
  min-height: calc(100vh - 10rem);
  max-width: 20rem;
  margin: auto;
  text-align: center;

  ${devices.tablet} {
    min-height: calc(100vh - 12rem);
  }
`;

const Auth: React.FC = () => {
  const [formType, setFormType] = useState("register");
  let chosenForm;

  const formChangeHandler = (formTypeName: string) => setFormType(formTypeName);

  if (formType === "register") {
    chosenForm = <RegisterForm formChangeHandler={formChangeHandler} />;
  } else if (formType === "login") {
    chosenForm = <LoginForm formChangeHandler={formChangeHandler} />;
  } else {
    chosenForm = <ForgotPwdForm formChangeHandler={formChangeHandler} />;
  }

  return <FormWrapper>{chosenForm}</FormWrapper>;
};

export default Auth;
