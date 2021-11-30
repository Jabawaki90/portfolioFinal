import styled from "styled-components";
import picture from "./../asset/profile.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <Wrapper>
      <div id="about" className="container">
        <div className="image-container">
          <img src={picture} alt="" />
        </div>
        <div className="detail-container">
          <h2 className="font">Hi! I'm Ashraf Azemi</h2>
          <p className="font">
            Im a Self-taught Web Developer, i live in Kuala Lumpur. I came from
            Engineering background but web development is what i interested in.
            Im on a journey changing my career as Junior/Support Front-End
            position. Kindly check out my work below.
          </p>
          {/* <a href="">Checkout my resume</a> */}
          <div className="logo-container">
            <a
              className="logo"
              href="https://www.linkedin.com/in/ashrafazemi/"
              target="_blank"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              className="logo"
              href="https://github.com/Jabawaki90"
              target="_blank"
            >
              <FaGithub className="icon" />
            </a>
          </div>
          <div className="contact-container">
            <h2 className="contact-child contact-title">Contact me here!</h2>
            <p className="contact-child">
              Email:
              <span>
                <a
                  className="email"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  target="_blank"
                >
                  {" "}
                  ashraf.chzm@gmail.com
                </a>
              </span>
            </p>
            <p className="contact-child">
              Phone: <span>+6 016 201 9424</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  // @media only screen and (max-width: 600px) {
  //   .container {
  //     display: flex;
  //     flex-direction: column;
  //     // align-items: center;
  //     // justify-content: center;
  //   }

  //   h2 {
  //     color: white;
  //     font-family: "Dongle", sans-serif;
  //     font-size: 64px;
  //     font-weight: normal;
  //   }

  //   p {
  //     font-family: "Dongle", sans-serif;
  //     color: grey;
  //     font-size: 40px;
  //     line-height: 1;
  //   }

  //   img {
  //     text-align: right;
  //     max-width: 100%;
  //     height: auto;
  //   }

  //   .image-container {
  //     overflow: hidden;
  //     width: 50px;
  //     margin-left: 100px;
  //     padding: 50px;
  //     // margin-right: 0;
  //     // background-color: orange;
  //     text-align: right;
  //   }

  //   .detail-container {
  //     width: 100%;
  //     margin-right: 200px;
  //     padding: 50px;
  //     margin-left: 0;
  //     // background-color: blue;
  //     height: 100%;
  //   }

  //   .logo-container {
  //     display: flex;
  //     justify-content: flex-start;
  //   }

  //   .logo {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     color: #337aff;
  //     font-size: 40px;
  //     background-color: #48494b;
  //     // background: white;
  //     border-radius: 50%;
  //     vertical-align: center;
  //     padding: 10px;
  //     margin: 10px;
  //   }

  //   .contact-container {
  //     display: flex;
  //     flex-direction: column;
  //     margin-top: 35px;
  //   }

  //   .contact-child {
  //     padding: 0;
  //     margin: 0;
  //     // color: #2b86e5;
  //   }

  //   .contact-title {
  //     color: #2b86e5;
  //     font-size: 40px;
  //     line-height: 1;
  //   }
  // }

  h2 {
    color: white;
    font-family: "Dongle", sans-serif;
    font-size: 64px;
    font-weight: normal;
  }

  p {
    font-family: "Dongle", sans-serif;
    color: grey;
    font-size: 40px;
    line-height: 1;
  }

  img {
    text-align: right;
    height: 770px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: orange;
    height: 100%;
  }

  .image-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-left: 100px;
    padding: 50px;
    // margin-right: 0;
    // background-color: orange;
    text-align: right;
  }

  .detail-container {
    width: 100%;
    margin-right: 200px;
    padding: 50px;
    margin-left: 0;
    // background-color: blue;
    height: 100%;
  }

  .logo-container {
    display: flex;
    justify-content: flex-start;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #337aff;
    font-size: 40px;
    background-color: #48494b;
    // background: white;
    border-radius: 50%;
    vertical-align: center;
    padding: 10px;
    margin: 10px;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
  }

  .contact-child {
    padding: 0;
    margin: 0;
    // color: #2b86e5;
  }

  .contact-title {
    color: #2b86e5;
    font-size: 40px;
    line-height: 1;
  }

  .email {
    text-decoration: none;
    color: #2b86e5;
  }

  span {
    color: #2b86e5;
  }

  .icon:hover {
    color: white;
    transition: 0.3s;
  }
`;

export default About;
