import styled from "styled-components";
import { devices, paddings } from "../../theme/theme";

const PageContentContainer = styled.div`
  width: 100%;
  margin: 4rem 0 0;
  padding: 0 ${paddings.sm};
  min-height: calc(100vh - 10rem);
  box-sizing: border-box;

  ${devices.tablet} {
    min-height: calc(100vh - 12rem);
    max-width: 64rem;
    padding: 0 ${paddings.lg};
    margin: 6rem auto 0;
  }
`;

const PageContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PageContentContainer>{children}</PageContentContainer>;
};

export default PageContent;