import styled from "styled-components";
import { Navbar, Intro, About, Skill, Portfolio, Footer } from "./component";

function App() {
  return (
    <Wrapper>
      <main>
        <Navbar />
        <Intro />
        <About />
        <Skill />
        <Portfolio />
        <Footer />
      </main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .modal {
    position: fixed;
    min-width: 180px;
    margin-top: 4px;
    border-radius: 3px;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export default App;
