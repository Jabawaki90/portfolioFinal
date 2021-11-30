import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
// import react, { useState } from "react";

const Skill = () => {
  return (
    <Wrapper>
      <div id="skill" className="container">
        <div className="title-container">
          <h2 className="title-1 title">WHAT I DO</h2>
          <h1 className="title-2 title">My Skill</h1>
        </div>
        <div className="skill-container">
          <article className="child ">
            <FaCss3Alt className="icon css" />
            <h2>CSS 3</h2>
          </article>
          <article className="child">
            <FaHtml5 className="icon html" />
            <h2>HTML 5</h2>
          </article>
          <article className="child">
            <SiJavascript className="icon js" />
            <h2>JAVASCRIPT ES6</h2>
          </article>
          <article className="child">
            <FaReact className="icon react" />
            <h2>REACT.js</h2>
          </article>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media only screen and (max-width: 600px) {
    .container {
      display: flex;
      flex-direction: column;
    }

    .skill-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    // height: 100%;
    // weight: 100%;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    margin: 0;
    padding: 0;
  }

  .title-1 {
    font-family: "Dongle", sans-serif;
    color: grey;
    font-size: 40px;
    letter-spacing: 6px;
  }

  .title-2 {
    font-family: arial;
    color: white;
    font-size: 50px;
    font-weight: 800;
  }

  .skill-container {
    display: flex;
    flex-direction: row;
    margin-top: 150px;
  }

  .child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // background-color: #8badaa;
    background-color: #355070;
    padding: 20px;
    margin: 20px;
    height: 150px;
    width: 200px;
  }

  .icon {
    color: black;
    font-size: 50px;
  }

  .css {
    color: blue;
  }

  .html {
    color: orange;
  }

  .js {
    color: yellow;
  }

  .react {
    color: cyan;
  }
`;

export default Skill;
