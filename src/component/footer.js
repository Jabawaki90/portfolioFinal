import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <div id="contact" className="container">
        <div className="logo-container parent">
          <a
            className="logo"
            href="https://github.com/Jabawaki90"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="logo"
            href="https://www.linkedin.com/in/ashrafazemi/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="contact-container parent">
          <h1 className="child">Contact Me</h1>
          <h2 className="child">ashraf.chzm@gmail.com</h2>
        </div>
        <p className="parent">This website is build purely with React.js</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 400px;
    margin-bottom: 100px;
    // background-color: blue;
  }

  .parent {
    margin: 40px;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: grey;
    font-size: 40px;
    background-color: #2e2e2e;
    // background: white;
    border-radius: 50%;
    vertical-align: center;
    padding: 10px;
    margin: 10px;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .child {
    margin: 0;
    padding: 10px;
    color: white;
  }

  p {
    color: grey;
    font-size: 20px;
  }

  h2 {
    font-weight: 10;
    font-size: 30px;
  }
`;

export default Footer;
