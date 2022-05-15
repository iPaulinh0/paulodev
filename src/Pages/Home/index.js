import {
  Container,
  MainContent,
  SocialContainer,
  ImageGit,
  ImageLinkedin,
  ImageInsta,
  Title,
  Subtitle,
  Intertitle,
  Image,
  FinalContainer
} from "./styles";
import Github from "../../assets/github.png"
import Linkedin from "../../assets/linkedin.png"
import Instagram from "../../assets/instagram.png"
import Character from "../../assets/character.png"
import Arrow from "../../assets/arrow.png"

export default function Home() {
  return (
        <Container>
          <SocialContainer>
            <ImageGit src={Github} alt="github-logo" />
            <ImageLinkedin src={Linkedin} alt="linkedin-logo" />
            <ImageInsta src={Instagram} alt="instagram-logo" />
          </SocialContainer>
          <MainContent>
            <Image src={Character} alt="paulo-dev-character" />
            <Title>PAULO VICTOR</Title>
            <Subtitle>DESENVOLVEDOR FRONT-END</Subtitle>
            <Intertitle>WEB • MOBILE • DESIGNER</Intertitle>
          </MainContent>
          <FinalContainer><img src={Arrow} alt="arrow" /></FinalContainer>
        </Container>
  );
}
