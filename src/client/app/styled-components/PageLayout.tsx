import styled from "react-emotion";

const PageLayout = styled.div`
  min-height: 100%;
  padding: 0;
  margin: 0;
  background-color: #dfdfdf;
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
  color: #333;
  text-align: center;
  display: grid;
  grid-template-rows: 50px 1fr 50px;

   {
    /* fix scrollbar issue */
  }
  padding-left: calc(100vw - 100%);
`;

export default PageLayout;
