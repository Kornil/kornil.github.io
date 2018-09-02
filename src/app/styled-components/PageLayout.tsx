import styled from "react-emotion";

const PageLayout = styled.div`
  height: inherit;
  padding: 0;
  margin: 0;
  background-color: #dfdfdf;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
  text-align: center;
  grid-template-areas:
    "nav nav"
    "main  main";
  grid-template-rows: 50px 1fr;
`;

export default PageLayout;
