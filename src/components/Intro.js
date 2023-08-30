import React, { useEffect } from "react";
import { styled } from "styled-components";
import ImageScroll from "./ImageScroll";
import Aos from "aos";
function Intro() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <IntroContainer>
      <div className="title-sticky">
        <div className="title">작품을 보기 전에</div>
        <div className="intro-container">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ marginBottom: "100px" }}
          >
            1900년대 중후반부터 지금에 이를때까지,
          </p>
          <img
            src="/images/graph.jpg"
            style={{ width: "400px", dispay: "block" }}
          ></img>
          <p data-aos="fade-up" data-aos-duration="1000">
            {" "}
            전세계 유례없는 급속한 성장을 이룬 나라, 대한민국.{" "}
          </p>
          <p data-aos="fade-up" data-aos-duration="1000">
            하지만 발전의 이면에서 피어오른 인구 구조적 문제는
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ marginTop: "20px" }}
          >
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
          <p style={{ fontSize: "25px", marginTop: "5px" }}>
            생산가능인구(15~64세) 100명 당 노인(65세 이상)의 비율
          </p>
          <p
            style={{
              paddingBottom: "3px",
              textAlign: "left",
              fontSize: "25px",
              marginLeft: "30px",
            }}
          >
            다음은 '노년 부양비' 라는 지표의 시간에 따른 변화를 나타낸
            그래프입니다.
          </p>

          <div className="table">
            <div className="stick">
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
              <div className="year">2067</div>
              <div className="box5" data-aos="fade-right"></div>
              <div className="rate" style={{ fontSize: "20px", color: "red" }}>
                100.4
              </div>
            </div>
            <div className="origin">출처 : 대한민국 통계청</div>
          </div>
        </div>

        <div className="intro-container">
          <p>
            단순 수치 상으로 보았을 때, 20년뒤의 청장년층의 부양부담은 2배가
            되고{" "}
          </p>
          <p style={{ marginTop: "10px" }}>
            40년뒤에는 무려 노년층 (65세이상) 의 인구가 청장년층의 인구를
            역전합니다.
          </p>
        </div>

        <div className="pyramid-sticky">
          <div className="pyramid-container">
            <div className="sticky">
              <p>이번엔 인구 피라미드를 살펴보죠. </p>
              <ImageScroll />
            </div>
          </div>
        </div>

        <div className="pyramid-translation">
          <p>
            시간의 흐름에 따라 인구 피라미드는 역피라미드형으로 변하고 있습니다.
            역피라미드는 구조적으로 불안정합니다. 기반이 많은 양의 하중을 견뎌야
            하기 때문이죠. 마찬가지로, 우리나라의 사회 근간이 되는 청장년층의
            부양부담은 기하급수적으로 늘고 있습니다.
          </p>
        </div>
        <div className="summary">
          <figcaption>
            <div className="circle"></div>
            <caption>
              <p className="name">Inyoung-Chung</p>
              <div className="introduce">
                <p className="class">
                  🏫 아트 엔 테크놀리지, 융합 소프트웨어 전공
                </p>
                <p className="one-liner">🐣 풀스택 개발자를 꿈꾸는 햇병아리</p>
              </div>
            </caption>
          </figcaption>
          <div className="image-container">
            <img
              src="./images/message-2.png"
              alt="메시지2"
              className="message"
            />

            <div className="circle"></div>
            <img
              src="./images/message-1.png"
              alt="메시지1"
              className="message"
            />
          </div>
        </div>
      </div>
    </IntroContainer>
  );
}

const IntroContainer = styled.div`
  height: 9500px;
  position: relative;
  padding-top: 50px;
  background-color: #ffdf46;
  .title-sticky {
    height: 8000px;
  }
  .title {
    font-size: 70px;
    position: sticky;
    color: black;
    font-style: normal;
    top: 60px;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 100px;
    padding-left: 150px;
    background-color: #ffdf46;
    z-index: 998;
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
    margin-top: 200px;
    font-size: 30px;
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
    margin-top: 100px;
    font-size: 20px;
  }
  .index-container p:first-child {
    font-size: 50px;
  }
  .index-container p:nth-child(2) {
    margin-top: 0px;
  }
  .index-container p:nth-child(3) {
    align-self: flex-start;
  }
  .index-container .table {
    margin: 25px 0px;
    padding: 40px;
    border-radius: 40px;
    position: relative;
  }
  .index-container .table .origin {
    position: absolute;
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
    background-color: #ff5733;
  }
  .index-container .table .stick .box2 {
    width: 64px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: #ff6f61;
  }
  .index-container .table .stick .box3 {
    width: 130px;

    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: #00ffff;
  }
  .index-container .table .stick .box4 {
    width: 280px;
    height: 25px;
    border-radius: 10px;
    align-self: flex-end;
    background-color: #32cd32;
  }

  .index-container .table .stick .box5 {
    width: 700px;
    align-self: flex-end;
    height: 25px;
    border-radius: 10px;
    background-color: #ff007f;
  }
  .index-container .table .stick {
    display: flex;
    margin-bottom: 130px;
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
    margin-top: 250px;
    justify-content: center;
    margin-bottom: 250px;
    position: sticky;
    top: 200px;
  }
  .pyramid-container p {
    margin-bottom: 10px;
    text-align: center;
  }
  .pyramid-translation {
    width: 78vw;
    margin: 50px auto 0px;
  }
  .pyramid-translation p {
    font-size: 23px;
    width: 45vw;
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
