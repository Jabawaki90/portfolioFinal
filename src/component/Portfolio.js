import styled from "styled-components";
import pokemon from "./../asset/pokemon.png";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Portfolio = () => {
  return (
    <Wrapper>
      <div id="portfolio" className="container">
        <div className="title-container">
          <h2 className="title-1 title">PORTFOLIO</h2>
          <h1 className="title-2 title">I love to share my projects</h1>
        </div>
        <div className="portfolio-container">
          <a
            href="https://github.com/Jabawaki90/pokemon"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio-card">
              <img src={pokemon} alt="pokemon" />

              <div className="content-container">
                <h2 className="child-title">Pokemon</h2>
                <div className="list-container">
                  <FaHtml5 className="html icon" />
                  <FaCss3Alt className="css icon" />
                  <FaReact className="react icon" />
                  <SiJavascript className="js icon" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 350px;
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

  .portfolio-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    // background-color: orange;
  }

  .portfolio-card {
    display: flex;
    flex-direction: column;
    align-item: center;
    width: 300px;
    // border: 5px solid grey;
    // border-radius: 5px;
    background-color: #355c7d;
    margin: 0px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .child-title {
    font-family: "Dongle", sans-serif;
    color: white;
    font-size: 35px;
    letter-spacing: 6px;
    margin: 0;
  }

  .list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .list {
    margin: 0;
  }

  .icon {
    font-size: 25px;
    margin-left: 5px;
    margin-right: 5px;
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

  a {
    text-decoration: none;
    background-color: white;
    margin: 50px;
  }
`;

export default Portfolio;
