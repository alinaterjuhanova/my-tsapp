import { Formik, Form } from "formik";
import { object, ref, string } from "yup";
import FormBtn from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import FormLabel from "../Form/FormLabel";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const validationSchema = object({
  name: string().required(),
  username: string().required(),
  email: string().email().required(),
  password: string().required(),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required(),
});

const RegisterForm: React.FC<{
  formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <FormTitle>Registration</FormTitle>
        <FormLabel>Name</FormLabel>
        <FormInput type="text" name="name" />
        <FormLabel>Username</FormLabel>
        <FormInput type="text" name="username" />
        <FormLabel>E-mail</FormLabel>
        <FormInput type="text" name="email" />
        <FormLabel>Password</FormLabel>
        <FormInput type="password" name="password" />
        <FormLabel>Repeat Password</FormLabel>
        <FormInput type="password" name="repeatPassword" />
        <FormBtn type="submit">Sign up</FormBtn>
        <FormTextLink onClick={() => formChangeHandler("login")}>
          Already have an account? Log in!
        </FormTextLink>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
