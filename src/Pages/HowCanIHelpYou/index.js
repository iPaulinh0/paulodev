import {
  Card,
    Container, Design, Habilities, ImageWebDesign, ImageWebDev, Mobile, Paragraph, Title2, Title3, Webdev, ToolsImage, ImageMobile, Title
  } from "./styles";

import WebDesign from "../../assets/web-design.png"
import Figma from "../../assets/figma.png"
import Photoshop from "../../assets/photoshop.png"
import WebDev from "../../assets/webdev.png"
import React from "../../assets/react.png"
import Next from "../../assets/next.png"
import VSCode from "../../assets/vscode.png"
import MobileIMG from "../../assets/mobile.png"
  
  export default function HowCanIHelpYou() {
    return (
          <Container>
            <Title>COMO EU POSSO TE AJUDAR?</Title>
            <Habilities>

              <Design>
                <Card>
                  <ImageWebDesign src={WebDesign}/>
                  <Title2>DESIGN</Title2>
                </Card>
                <Paragraph>Com um briefing e conversas claras, podemos desenhar todo modelo do site/app que você necessita.</Paragraph>
                <Title3>Ferramentas:</Title3>
                <ToolsImage src={Figma} />
                <ToolsImage src={Photoshop} />
              </Design>

              <Webdev>
                <Card>
                  <ImageWebDev src={WebDev} />
                  <Title2>WEB DEVELOPMENT</Title2>
                </Card>
                <Paragraph>Utilizando os melhores frameworks do mercado, montaremos um site comunicativo e funcional.</Paragraph>
                <Title3>Ferramentas:</Title3>
                <ToolsImage src={React} />
                <ToolsImage src={Next} />
                <ToolsImage src={VSCode} />
              </Webdev>

              <Mobile>
                <Card>
                  <ImageMobile src={MobileIMG} />
                  <Title2>MOBILE</Title2>
                </Card>
                <Paragraph>Aplicando os métodos de responsividade ou criando um aplicativo, conseguiremos alcançar o grande público do mobile.</Paragraph>
                <Title3>Ferramentas:</Title3>
                <ToolsImage src={React} />
                <ToolsImage src={VSCode} />
              </Mobile>

            </Habilities>
          </Container>
    );
  }