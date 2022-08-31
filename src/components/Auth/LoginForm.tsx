import { Form, Formik } from "formik";
import { object, string } from "yup";
import FormBtn from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import FormLabel from "../Form/FormLabel";
import FormTextLink from "../Form/FormTextLink";
import FormTitle from "../Form/FormTitle";

const validationSchema = object({
  userName: string().required(),
  password: string().required(),
});

const LoginForm: React.FC<{
  formChangeHandler: (formType: string) => void;
}> = ({ formChangeHandler }) => {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: values.userName,
            password: values.password,
          }),
        })
          .then((res) => res.json())
          .then(console.log);
      }}
    >
      <Form>
        <FormTitle>Log in</FormTitle>
        <FormLabel>Username</FormLabel>
        <FormInput type="text" name="userName" />
        <FormLabel>Password</FormLabel>
        <FormInput type="password" name="password" />
        <FormBtn type="submit">Log in</FormBtn>
        <FormTextLink onClick={() => formChangeHandler("forgot")}>
          Forgot password?
        </FormTextLink>
      </Form>
    </Formik>
  );
};

export default LoginForm;
