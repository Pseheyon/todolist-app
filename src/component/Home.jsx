import TodolistContainer from "./TodolistContainer";
import DoneTodos from "./DoneTodos";
import TodosList from "./TodosList";
import styled from "styled-components";
import GlobalStyle from "./createGlobalStyle";

function Home() {
  return (
    <>
      <GlobalStyle />
      <StContainer>
        <TodolistContainer />
        <StInner>
          <TodosList />
          <DoneTodos />
        </StInner>
      </StContainer>
    </>
  );
}
const StContainer = styled.section`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
const StInner = styled.div`
  width: 100%;
  padding: 2%;
  overflow: hidden;
  box-sizing: border-box;
`;

export default Home;
