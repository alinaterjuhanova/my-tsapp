import { Field } from "formik";
import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const FormInput = styled(Field)`
  width: 100%;
  height: 2rem;
  border: 1px solid ${colors.lightViolet};
  box-sizing: border-box;
  margin-bottom: ${margins.sm};
`;

export default FormInput;
