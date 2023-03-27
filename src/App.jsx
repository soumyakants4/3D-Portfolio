import styled from "styled-components";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Who from "./components/Who";

const Container = styled.div`
  height: 100vh;
  background-color: gray;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overflow-y: auto;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar- {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
