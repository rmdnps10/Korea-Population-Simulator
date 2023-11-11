import React from "react";
import { styled } from "styled-components";

function Title() {
  return (
    <TitleContainer>
      <ScrollIndex>아래로 스크롤해주시면 감사하겠습니다.</ScrollIndex>
      <div className="hourglass"></div>
      <div className="title-wrap">
        <div className="title1" data-aos="fade-up">
          Korean
        </div>
        <div className="title2" data-aos="fade-up">
          Population
        </div>
        <div className="title3" data-aos="fade-up">
          Simulator.
        </div>
      </div>
    </TitleContainer>
  );
}
const ScrollIndex = styled.div`
  color: gray;
  opacity: 0.8;
  position: absolute;
  bottom: 50px;
  left: 164px;
  font-weight: 300;
  font-size: 20px;
`;

const TitleContainer = styled.div`
  background-color: black;
  height: 770px;
  position: relative;
  .hourglass {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
  }
  .title-wrap {
    padding-top: 150px;
    width: 90%;
    color: white;
    font-size: 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
  }
  .title-wrap .title1 {
    padding-left: 130px;
  }
  .title-wrap .title2 {
    text-align: center;
  }
  .title-wrap .title3 {
    text-align: right;
  }
`;

export default Title;
