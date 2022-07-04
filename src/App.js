import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import HowCanIHelpYou from "./Pages/HowCanIHelpYou";
import Habilities from "./Pages/Habilities";
import { GlobalStyle } from "./styles/globalStyles";
import { Container } from "./styles/styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
        <Container>
          <Home />
          <AboutMe />
          <HowCanIHelpYou />
          <Habilities />
        </Container>
      </>
  );
}
