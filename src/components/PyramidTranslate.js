import React from "react";
import styled from "styled-components";

function PyramidTranslate() {
  return (
    <PyramidTranslateWrapper>
      <TranslateBox>
        <TranslateLine />
        <TranslateText>
          시간의 흐름에 따라 인구 피라미드는 역피라미드형으로 변하고 있습니다.
        </TranslateText>
        <TranslateText>역피라미드는 구조적으로 불안정합니다.</TranslateText>
        <TranslateText>
          기반이 많은 양의 하중을 견뎌야 하기 때문이죠.
        </TranslateText>
        <TranslateText>
          인구 피라미드의 경사는 시간이 자남에 따라 가파라지고 있습니다.
        </TranslateText>
        <TranslateText>
          마찬가지로, 우리나라의 사회 기반인, 청장년층의 부양부담은
          기하급수적으로 늘고 있습니다
        </TranslateText>
      </TranslateBox>
    </PyramidTranslateWrapper>
  );
}

const PyramidTranslateWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
`;

const TranslateLine = styled.div`
  width: 5px;
  height: 240px;
  background-color: black;
  position: absolute;
  top: 0px;
  left: -30px;
`;

const TranslateBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 30px;
`;

const TranslateText = styled.div`
  font-size: 23px;
`;

export default PyramidTranslate;
