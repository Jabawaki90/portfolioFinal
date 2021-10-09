import react from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="text-container1">
          <h3>Hello I'm</h3>
          <h1>ASHRAF AZEMI</h1>;
        </div>
        <div className="text-container2">
          <h3>I'm from Kuala Lumpur</h3>
          <h1>A SELF-TAUGHT WEB DEVELOPER</h1>;
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background-color: #161616;
    height: 100vh;
  }

  .text-container1 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 200px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .text-container2 {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 200px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }
  h1 {
    margin: 0;
    color: white;
    font-size: 50px;
    text-align: center;
  }

  h3 {
    color: white;
    margin-bottom: 30px;
  }
`;

export default Intro;
