import React from "react";
import { styled } from "styled-components";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
function Title() {
  const canvasRef = useRef(null);
  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    const inc = 0.05;

    const renderCanvas = () => {
      context.clearRect(0, 0, width, height); // Clear the canvas

      let r = 100;
      for (let t = 0; t < 3 * Math.PI; t += inc) {
        const x = width / 2 + r * Math.cos(t) * Math.sin(t);
        const y = height / 2 + r * Math.sin(t);
        const strokeWeight = Math.random() * 9 + 10;

        context.strokeStyle = "white"; // Set stroke color
        context.lineWidth = strokeWeight;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + 1, y); // Draw a point
        context.stroke();
        r = Math.random() * 30 + 100; // Update radius
      }
    };

    const interval = setInterval(renderCanvas, 100); // Call renderCanvas every 0.1 second
    return () => clearInterval(interval); // Clear interval when component unmounts
  }, []);

  return (
    <TitleContainer>
      <div className="hourglass">
        <canvas ref={canvasRef} width={400} height={400} />;
      </div>
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

const TitleContainer = styled.div`
  background-color: black;
  height: 740px;
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
    font-size: 140px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: white;
  }
  .title-wrap .title1 {
    padding-left: 30px;
  }
  .title-wrap .title2 {
    text-align: center;
  }
  .title-wrap .title3 {
    text-align: right;
  }
`;

export default Title;
