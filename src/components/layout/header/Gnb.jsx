import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";

const Gnb = () => {
  const location = useLocation();

  return (
    <GnbWapper>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">
            <AiFillHome /> Home
          </Link>
        </li>
        <li className={location.pathname === "/drops" ? "active" : ""}>
          <Link to="/Drops">
            <AiOutlineShoppingCart />
            Drops
          </Link>
        </li>
        <li className={location.pathname === "/stats" ? "active" : ""}>
          <Link to="/Stats">
            <BsBarChartFill />
            Stats
          </Link>
        </li>
        <li className={location.pathname === "/create" ? "active" : ""}>
          <Link to="/Create">
            <BsBarChartFill /> Create
          </Link>
        </li>
      </ul>

      {/* <ul>
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">홈</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to="/about">소개</Link>
                </li>
            </ul> */}
    </GnbWapper>
  );
};

const GnbWapper = styled.nav`
  ul {
    li {
      position: relative;
      margin-left: 3px;
      &::after {
        opacity: 0;
        transition: opacity 1s;
      }
      &.active {
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -32px;
          transform: translateY(-50%);
          width: 4px;
          height: 36px;
          border-radius: 25px;
          background: var(--primary);
          opacity: 1;
        }
        a {
          color: var(--primary-dark);
          font-weight: 700;
          svg {
            color: var(--primary);
          }
        }
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 16px 0;
        color: var(--secondary-grey-600);
        font-weight: 500;
        &:hover {
          color: var(--primary-dark);
        }
      }
      svg {
        font-size: 20px;
      }
    }
  }
`;

export default Gnb;
