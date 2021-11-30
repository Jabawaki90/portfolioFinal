import styled from "styled-components";

const Intro = () => {
  return (
    <Wrapper>
      <div id="intro" className="container">
        <div className="text-container1 fadeOout">
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
    top: 35%;
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
    top: 35%;
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

  .fadeOout {
    animation: fadeOut linear 4s;
  }

  .fadeIin {
    animation: fadeIn linear 4s;
  }

  @keyframes fadeOut {
    100% {
      opacity: 1;
    }
    0% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
