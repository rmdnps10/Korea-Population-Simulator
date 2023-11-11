import React from "react";
import { styled } from "styled-components";
import Title from "../components/Title";
import Intro from "../components/Intro";

function Home() {
  return (
    <HomeContainer>
      <section className="title">
        <Title />
      </section>
      <section className="intro">
        <Intro />
      </section>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;
  height: 3000px;
`;

export default Home;
