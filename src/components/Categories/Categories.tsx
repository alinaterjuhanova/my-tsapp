import { useContext } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import DataContext from "../../context/DataContext";
import { paddings } from "../../theme/theme";
import CategoryItem from "./CategoryItem";

const CategoryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-top: ${paddings.md};
`;

const Categories: React.FC = () => {
  const { categories, setCategories } = useContext(DataContext);

  const { isLoading } = useQuery("categoryData", () =>
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((stateData) => setCategories(stateData))
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <CategoryWrapper>
      {categories.map((category: string, index: number) => {
        return <CategoryItem key={index} category={category} />;
      })}
    </CategoryWrapper>
  );
};

export default Categories;


