import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import ImageScroll from "./ImageScroll";
import Aos from "aos";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PyramidTranslate from "./PyramidTranslate";
function Intro() {
  const [isShowArrow, setShowArrow] = useState(null);
  useEffect(() => {
    Aos.init();
    const showArrow = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 6350) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
    window.addEventListener("scroll", showArrow);
    return () => {
      window.removeEventListener("scroll", showArrow);
    };
  }, []);
  return (
    <IntroContainer>
      {isShowArrow ? <ArrowGif src={"./images/arrow.gif"} /> : ""}
      <div className="title-sticky">
        <div className="title">Introduction</div>
        <div className="intro-container">
          <p data-aos="fade-up" data-aos-duration="1000">
            1900년대 중후반부터 지금에 이를때까지,
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            {" "}
            전세계 유례없는 급속한 성장을 이룬 나라, 대한민국.{" "}
          </p>

          <p data-aos="fade-up" data-aos-duration="1000">
            하지만 발전의 이면에서 피어오른 인구 구조적 문제는
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            지난 수십년간 정부의 노력이 무색하게 더욱 심각해져갔습니다.🤔
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            {" "}
            체감을 위해 지표를 하나 살펴볼까요?
          </p>
        </div>
        <div className="index-container">
          <p>
            <span>&#8251;</span>노년부양비
          </p>
          <p style={{ fontSize: "20px", marginTop: "5px" }}>
            : 생산가능인구(15~64세) 100명 당 노인(65세 이상)의 비율
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            다음은 '노년 부양비' 라는 지표의 시간에 따른 변화를 나타낸
            그래프입니다.
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ marginLeft: "10px" }}
            />
          </p>

          <div className="table">
            <div className="stick" style={{ marginTop: "20px" }}>
              <div className="year">1970</div>
              <div className="box1" data-aos="fade-right"></div>
              <div className="rate">5.7</div>
            </div>
            <div className="stick">
              <div className="year">2000</div>
              <div className="box2" data-aos="fade-right"></div>
              <div className="rate">10.1</div>
            </div>
            <div className="stick">
              <div className="year">2023</div>
              <div className="box3" data-aos="fade-right"></div>
              <div className="rate">20.6</div>
            </div>
            <div className="stick">
              <div className="year">2040</div>
              <div className="box4" data-aos="fade-right"></div>
              <div className="rate">40.5</div>
            </div>
            <div className="stick">
              <div className="year">2050</div>
              <div className="box6" data-aos="fade-right"></div>
              <div className="rate">70.5</div>
            </div>
            <div className="stick" style={{ marginBottom: "10px" }}>
              <div className="year">2067</div>
              <div className="box5" data-aos="fade-right"></div>
              <div className="rate" style={{ fontSize: "20px", color: "red" }}>
                100.4
              </div>
            </div>
            <div
              className="statics-description"
              style={{
                color: "red",
                textAlign: "right",
                fontSize: "25px",
                marginBottom: "30px",
              }}
            >
              2065년엔 국민 절반 이상이 노인 인구 (65세 이상)
            </div>
            <div className="origin">출처 : 대한민국 통계청 </div>
          </div>
        </div>

        <div className="intro-container">
          <p style={{ fontSize: "25px" }}>
            단순 수치 상으로 보았을 때, 20년뒤의 청장년층의 부양부담은 2배가
            되고{" "}
          </p>
          <p style={{ marginTop: "10px", fontSize: "25px" }}>
            40년뒤에는 무려 노년층 (65세이상) 의 인구가 청장년층의 인구를
            역전합니다.
          </p>
        </div>

        <div className="pyramid-sticky">
          <div className="pyramid-container">
            <p>이번엔 인구 피라미드를 살펴보죠. </p>
            <div className="sticky">
              <ImageScroll />
            </div>
          </div>
        </div>
        <PyramidTranslate />
        <div className="final" style={{ marginTop: "200px" }}>
          <div className="textwrap">
            <p>이번 프로젝트에서 저는 연도별 인구 피라미드를 시각화하여</p>
            <p>청장년층이 느낄 부양 부담을 나타내었습니다.</p>
            <p>
              상단의 내비게이션을 통해 연도별 모델에 접속하실 수 있습니다:){" "}
            </p>
          </div>
        </div>
      </div>
    </IntroContainer>
  );
}

const ArrowGif = styled.img`
  width: 50px;
  position: fixed;
  top: 50px;
  right: 150px;
  transform: rotate(180deg);
  width: 500px;
  z-index: 9999999;
`;

const IntroContainer = styled.div`
  height: 6500px;
  position: relative;
  padding-top: 50px;
  background-color: #ffdf46;
  .final .textwrap {
    margin-top: 320px;
  }
  .final .textwrap p {
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
  }
  .title-sticky {
    height: 6500px;
  }
  .title {
    font-size: 50px;
    position: sticky;
    color: black;
    font-style: normal;
    top: 60px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 100px;
    padding-left: 150px;
    background-color: rgba(255, 223, 70, 0.9);
    z-index: 99999;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .intro-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .intro-container.sticky {
    position: sticky;
    top: 80px;
  }

  .intro-container > p {
    margin-top: 15px;
    font-size: 25px;
  }
  p {
    padding: 10px;
    font-size: 23px;
  }

  .index-container {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .index-container > p {
    font-size: 18px;
  }
  .index-container p:first-child {
    font-size: 50px;
    animation: scale 0.4s ease-in-out alternate infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1.03);
    }
    100% {
      transform: scale(1);
    }
  }
  .index-container p:nth-child(2) {
    margin-top: 0px;
  }
  .index-container p:nth-child(3) {
  }
  .index-container .table {
    margin: 25px 0px;
    padding: 40px;
    padding-right: 60px;
    padding-left: 60px;
    position: relative;
    background-color: white;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 50px;
    box-shadow: 0 10px 25px rgba(51, 51, 51, 0.5);
  }
  .index-container .table .origin {
    position: absolute;
    right: 90px;
    font-size: 20px;
  }

  .index-container .table .criteria {
    display: flex;
    padding-bottom: 30px;
    margin-bottom: 50px;
    font-size: 20px;
  }

  .index-container .table .criteria .year {
    text-align: center;
    line-height: 20px;
  }
  .index-container .table .criteria .rate {
    text-align: center;
    flex-grow: 1;
    font-size: 600;
    font-size: 30px;
  }
  .index-container .table .stick .box1 {
    width: 40px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: black;
    opacity: 0.3;
  }
  .index-container .table .stick .box2 {
    width: 64px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: black;
    opacity: 0.4;
  }
  .index-container .table .stick .box3 {
    width: 130px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: black;
    opacity: 0.6;
  }
  .index-container .table .stick .box4 {
    width: 280px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: black;
    opacity: 0.8;
  }
  .index-container .table .stick .box6 {
    width: 500px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: black;
  }

  .index-container .table .stick .box5 {
    width: 700px;
    align-self: flex-end;
    height: 25px;
    border-radius: 10px;
    background-color: red;
  }
  .index-container .table .stick {
    display: flex;
    margin-bottom: 40px;
  }
  .index-container .table .stick:last-child {
    margin-bottom: 0px;
  }
  .index-container .table .stick .year {
    margin-right: 30px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-size: 30px;
    font-weight: 600;
  }
  .index-container .table .stick .rate {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 600;
  }
  .index-container .table .stick:last-child .rate {
    color: red;
  }
  .pyramid-sticky {
    height: 4000px;
  }
  .pyramid-container {
    margin-top: 150px;
    justify-content: center;
    margin-bottom: 250px;
    position: sticky;
    top: 200px;
  }
  .pyramid-container p {
    font-size: 26px;
    margin-bottom: 10px;
    text-align: center;
  }
  .pyramid-translation {
    width: 78vw;
    margin: 50px auto 0px;
  }
  .pyramid-translation p {
    font-size: 23px;
    width: 50vw;
    line-height: 50px;
    border-left: 5px solid;
    padding: 0px;
    padding-left: 20px;
  }

  .summary {
    margin: 130px auto 20px;
    padding-top: 60px;
    display: flex;
    justify-content: center;
    height: 460px;
  }

  .summary figcaption {
    position: relative;
    display: block;
    align-self: flex-end;
  }
  .summary figcaption .circle {
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background-color: white;
    background-image: url("./images/inyoung.png");
    background-size: cover;
    position: relative;
  }

  .summary img.message {
    align-self: flex-start;
    margin-top: 20px;
    width: 600px;
    display: block;
  }

  .summary caption {
    position: absolute;
    bottom: -40px;
    left: 0px;
    width: 100%;
  }
  .summary caption .name {
    padding: 10px;
    font-size: 15px;
    background-color: white;
    width: 120px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  .summary caption .class {
    padding: 10px;
    width: 100%;
    text-align: center;
    font-size: 10px;
    font-weight: 300;
  }
  .summary p.message {
    font-size: 30px;
    width: 800px;
    line-height: 60px;
    padding-top: 60px;
  }
  .summary p.one-liner {
    padding: 0px;
    font-size: 10px;
  }
`;

export default Intro;
