import styled from "styled-components";

const Modal = () => {
  return (
    <Wrapper>
      <div className="container">
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  a {
    text-decoration: none;
    padding: 10px;
    color: black;
    font-weight: bold;
  }
`;

export default Modal;
