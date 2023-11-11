import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">한국 인구 시뮬레이터</Link>
        </div>
        <ul className="years">
          <li>
            <a href="https://rmdnps10.github.io/ICC1970/">1970</a>
          </li>
          <li>
            <a href="https://rmdnps10.github.io/ICC1985/">1985</a>
          </li>
          <li>
            <a href="https://rmdnps10.github.io/ICC2000/">2000</a>
          </li>
          <li>
            <a href="https://rmdnps10.github.io/ICC2023/">2023</a>
          </li>
          <li>
            <a href="https://rmdnps10.github.io/ICC2035/">2035</a>
          </li>
          <li>
            <a href="https://rmdnps10.github.io/ICC2050/">2050</a>
          </li>
          <li>
            <a href="https://rmdnps10.github.io/ICC/">2060</a>
          </li>
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
