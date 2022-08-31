import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { colors, devices, fontSizes, margins, paddings } from "../../theme/theme";
import logoImage from "../../assets/online-shop.png";
import menuIcon from "../../assets/icons/icon-menu.svg";
import userIcon from "../../assets/icons/icon-person.svg";
import heartIcon from "../../assets/icons/icon-heart-empty.svg";
import bagIcon from "../../assets/icons/icon-bag-empty.svg";
import SideBarContext from "../../context/SideBarContext";
import DataContext from "../../context/DataContext";

const StyledNav = styled.header`
  width: 100%;
  height: 4rem;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  background: ${colors.bg};
  padding: ${paddings.sm};
`;

const BurgerBtn = styled.button`
  width: 2rem;
  height: 2rem;
  float: left;
  background: url(${menuIcon}) center no-repeat;
  ${devices.mobile} {
    display: none;
  }
`;

const NavActionWrapper = styled.div`
  display: flex;
  height: 100%;
  float: right;
  justify-content: right;
  align-items: center;
`;

const StyledLink = styled(Link)<{ icon: string }>`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: ${margins.sm};
  background: url(${(props) => props && props.icon}) center/contain no-repeat;
`;

const CartLink = styled(StyledLink)`
  position: relative;

  span {
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
    text-align: center;
    position: absolute;
    color: ${colors.bg};
  }
`;

const CategoryMenu = styled.div`
  display: none;
  width: 100%;
  height: 2rem;
  position: absolute;
  top: 4rem;
  justify-content: center;
  background: ${colors.lightViolet};

  ${devices.tablet} {
    display: flex;
  }
`;

const CategoryLink = styled(Link)`
  width: 8rem;
  height: 100%;
  border-right: 1px solid ${colors.bg};
  text-decoration: none;
  color: ${colors.darkViolet};
  font-size: ${fontSizes.xs};
  text-align: center;
  line-height: 2rem;
  text-transform: uppercase;

  &:nth-child(1) {
    border-left: 1px solid ${colors.bg};
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Nav: React.FC = () => {
  const { isSideBarOpen, setIsSideBarOpen } = useContext(SideBarContext);
  const { categories } = useContext(DataContext);

  return (
    <>
      <StyledNav>
        <BurgerBtn onClick={(): void => setIsSideBarOpen(!isSideBarOpen)} />
        <StyledLink to="/" icon={logoImage} />
        <NavActionWrapper>
          <StyledLink to="/auth" onClick={(): void => {}} icon={userIcon} />
          <StyledLink to="/wishlist" icon={heartIcon} />
          <CartLink to="/cart" icon={bagIcon} />
        </NavActionWrapper>
      </StyledNav>
      <CategoryMenu>
        {categories ? (
          <>
            {categories.slice(0, 6).map((category: string, index) => {
              return (
                <CategoryLink key={index} to={`/${category}`}>
                  {category}
                </CategoryLink>
              );
            })}
          </>
        ) : (
          <div>loading ... </div>
        )}
      </CategoryMenu>
    </>
  );
};

export default Nav;
