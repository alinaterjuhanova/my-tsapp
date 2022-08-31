import styled from "styled-components";
import { colors, fontSizes, devices } from "../../theme/theme";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.darkViolet};
  font-weight: 700;
  min-height: calc(100vh - 10rem);

  ${devices.tablet} {
    min-height: calc(100vh - 12rem);
  }
`;

const FourZeroFour = styled.h1`
  font-size: 6rem;
  line-height: 8rem;
`;

const PageNotFound = styled.div`
  font-size: ${fontSizes.lg};
  line-height: 3rem;
`;

const NotFound: React.FC = () => {
  return (
    <ContentWrapper>
      <FourZeroFour>404</FourZeroFour>
      <PageNotFound>Page not found</PageNotFound>
    </ContentWrapper>
  );
};

export default NotFound;
