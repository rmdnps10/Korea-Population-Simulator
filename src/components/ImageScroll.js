import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

function ImageScroll() {
  const imageUrls = [
    "./images/1970.png",
    "./images/1980.png",
    "./images/1990.png",
    "./images/2000.png",
    "./images/2010.png",
    "./images/2023.png",
    "./images/2040.png",
    "./images/2050.png",
    "./images/2065.png",
  ];

  const yearList = [1970, 1980, 1990, 2000, 2010, 2023, 2040, 2050, 2065];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log(currentImageIndex);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition > 4500) {
        setCurrentImageIndex(8);
      } else if (scrollPosition > 2000) {
        const newIndex =
          Math.floor((scrollPosition - 2100) / 300) % imageUrls.length;
        setCurrentImageIndex(newIndex);
        if (newIndex < 0) {
          setCurrentImageIndex(0);
        }
      } else {
        setCurrentImageIndex(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContainer>
      <h1>{yearList[currentImageIndex]}년 모델</h1>
      <img
        src={imageUrls[currentImageIndex]}
        alt={yearList[currentImageIndex]}
      />
    </ScrollContainer>
  );
}

const ScrollContainer = styled.div`
  text-align: center;
  padding: 0px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  img {
    width: 1000px;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 50px;
    border: 6px solid;
  }
`;

export default ImageScroll;
