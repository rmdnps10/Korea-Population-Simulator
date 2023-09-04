import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <div className="nav-container">
        <div className="logo">한국 인구 시뮬레이터</div>
        <ul className="years">
          <li>
            <a href="https://naver.com">1970</a>
          </li>
          <li>1985</li>
          <li>2000</li>
          <li>2020</li>
          <li>2035</li>
          <li>2050</li>
          <li>2060</li>
        </ul>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(1.8px);
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  .nav-container {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
  }
  .logo {
    display: flex;
    color: white;
  }
  ul.years {
    display: flex;
    gap: 40px;
  }
  ul.years li {
    cursor: pointer;
    padding: 3px 0;

    &:hover {
      display: block;
      transition: 2s;
      border-bottom: 1px solid white;
    }
  }
`;

export default Nav;
