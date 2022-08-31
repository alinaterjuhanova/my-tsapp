import styled from "styled-components";
import { fontSizes, margins } from "../../theme/theme";

const StyledFooter = styled.footer`
  width: 100%;
  height: 6rem;
  bottom: 0;
  text-align: center;
  font-size: ${fontSizes.sm};
`;

const Icons = styled.div`
  width: 8rem;
  height: 2rem;
  margin: ${margins.sm} auto;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.a`
  width: 2rem;
  height: 2rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Icons>
        <Icon href="/fb" target="_blank">
          <img src={require("../../assets/facebook.png")} alt="" />
        </Icon>
        <Icon href="/tw" target="_blank">
          <img src={require("../../assets/twitter-sign.png")} alt="" />
        </Icon>
        <Icon href="/inst" target="_blank">
          <img src={require("../../assets/instagram.png")} alt="" />
        </Icon>
      </Icons>
      <div>© 2022 Alina Terjuhanova</div>
    </StyledFooter>
  );
};

export default Footer;
