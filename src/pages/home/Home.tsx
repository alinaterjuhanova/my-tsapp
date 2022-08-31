import styled from "styled-components";
import { colors, fontSizes, paddings } from "../../theme/theme";
import leftIcon from "../../assets/icons/icon-arrow-l.svg";
import rightIcon from "../../assets/icons/icon-arrow-r.svg";
import slide1 from "../../assets/bg/bg-1.jpg";
import slide2 from "../../assets/bg/bg-2.jpg";
import slide3 from "../../assets/bg/bg-3.jpg";
import slide4 from "../../assets/bg/bg-4.jpg";
import slide5 from "../../assets/bg/bg-5.jpg";
import slide6 from "../../assets/bg/bg-6.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const sliderData = [
  {
    id: 1,
    img: slide1,
    title: "Slide one",
    url: "/slide1",
  },
  {
    id: 2,
    img: slide2,
    title: "Slide two",
    url: "/slide2",
  },
  {
    id: 3,
    img: slide3,
    title: "Slide three",
    url: "/slide3",
  },
  {
    id: 4,
    img: slide4,
    title: "Slide four",
    url: "/slid4",
  },
  {
    id: 5,
    img: slide5,
    title: "Slide five",
    url: "/slide5",
  },
  {
    id: 6,
    img: slide6,
    title: "Slide six",
    url: "/slide6",
  },
];

const SliderWrapper = styled.div`
  position: relative;
  padding-top: ${paddings.lg};
  width: 100%;
  height: 12rem;
`;

const Slide = styled(Link)<{ bg: string }>`
  position: relative;
  width: 100%;
  height: 10rem;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.lightViolet};
  font-size: ${fontSizes.lg};
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  width: 12rem;
  height: 2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SliderButton = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${colors.lightViolet};
  border-radius: 50%;
`;

const Arrow = styled.div<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  right: 1rem;
  background: url(${rightIcon}) rgba(249, 247, 247, 0.5) center/contain
    no-repeat;
  width: 2rem;
  height: 2rem;

  ${(props) =>
    props &&
    props.left &&
    `
    left: 1rem;
    background: url(${leftIcon}) rgba(249, 247, 247, 0.5) center/contain no-repeat;
    right: unset;
  `}
`;

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevHandler = () => {
    setCurrentSlide(
      currentSlide > 0 ? currentSlide - 1 : sliderData.length - 1
    );
  };

  const nextHandler = () => {
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <>
      <SliderWrapper>
        <Slide
          bg={sliderData[currentSlide].img}
          to={sliderData[currentSlide].url}
        >
          <div>{sliderData[currentSlide].title}</div>
        </Slide>
        <Arrow left onClick={prevHandler} />
        <Arrow onClick={nextHandler} />
        <ButtonWrapper>
          {sliderData.map((slide, index) => {
            return (
              <SliderButton
                key={index}
                onClick={(): void => setCurrentSlide(index)}
              />
            );
          })}
        </ButtonWrapper>
      </SliderWrapper>
      <Categories />
    </>
  );
};

export default Home;
