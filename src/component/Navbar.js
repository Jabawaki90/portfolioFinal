import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import styled from "styled-components";
import profile from "../asset/profile.jpeg";
import { Modal } from "./index.js";

const Navbar = () => {
  const [modal, setModal] = useState(true);

  return (
    <Wrapper>
      <section className="nav-container">
        <div className="name">
          <img src={profile} alt="" />
          <h1>ASHRAF AZEMI</h1>
        </div>
        <div className="dropdown">
          <button className="link">
            <GiHamburgerMenu id="icon" />
          </button>
          <div className="dropdown-menu">
            <Modal />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: horizontal;
    height: 100px;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  h1 {
    color: white;
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
  }
  #icon {
    // color: white;
    font-size: 30px;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    opacity: 0;
    // pointer-events: none;
    transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
    position: absolute;
    background-color: white;
    z-index: 2;
    padding: 10px;
    left: 0;
    top: calc(100% + 0.25rem);
    box-shadow: 0 2px 15px 0 rgba(255, 255, 255, 0.3);
    border-radius: 0.25rem;
  }

  .dropdown > .link:focus + .dropdown-menu {
    opacity: 1;
    transform: translateY(0);
    // pointer-events: auto;
  }
`;

export default Navbar;
