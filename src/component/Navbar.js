import react from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import profile from "../asset/profile.png";

const Navbar = () => {
  return (
    <Wrapper>
      <section className="container">
        <div className="name">
          <img src={profile} alt="" />
          <h1>ASHRAF AZEMI</h1>
        </div>
        <GiHamburgerMenu id="icon" />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
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
    color: white;
    font-size: 30px;
  }
`;

export default Navbar;
