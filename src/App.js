import Home from "./Pages/Home";
import { GlobalStyle } from "./styles/globalStyles";
import { Container } from "./styles/styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
        <Container>
          <Home />
        </Container>
      </>
  );
}
