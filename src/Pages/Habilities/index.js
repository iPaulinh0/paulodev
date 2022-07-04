import {
      Container, DesignCard, FrontEndCard, Title, HabilitiesCard, Title2, HTMLHabilities, HTMLIcon, Paragraph, CSSHabilities, CSSIcon, JSHabilities, JSIcon, HTMLProgressBar, HTMLFilledProgressBar, PercentageText, CSSProgressBar, CSSFilledProgressBar, JSProgressBar, JSFilledProgressBar, PSHabilities, PSIcon, PSProgressBar, PSFilledProgressBar, FigmaHabilities, FigmaIcon, FigmaProgressBar, FigmaFilledProgressBar, AIHabilities, AIIcon, AIProgressBar, AIFilledProgressBar
    } from "./styles";
  
import HTML from "../../assets/html5.png"
import CSS from "../../assets/css3.png"
import JS from "../../assets/js.png"
import PS from "../../assets/photoshop.png"
import Figma from "../../assets/figma.png"
import AI from "../../assets/illustrator.png"
    
    export default function Habilities() {

      const HTMLBarWidth = '95%';  
      const CSSBarWidth = '85%';  
      const JSBarWidth = '60%';  
      const PSBarWidth = '95%';  
      const FigmaBarWidth = '95%';  
      const AIBarWidth = '95%';  

      return (
            <Container>
              <Title>HABILIDADES</Title>
              <HabilitiesCard>
                <FrontEndCard>
                    <Title2>FRONT-END</Title2>

                    <HTMLHabilities>
                        <HTMLIcon src={HTML} />
                        <Paragraph>HTML</Paragraph>
                    </HTMLHabilities>
                    <HTMLProgressBar>
                        <HTMLFilledProgressBar width={HTMLBarWidth} text={HTMLBarWidth}>
                            <PercentageText>{HTMLBarWidth}</PercentageText>
                        </HTMLFilledProgressBar>
                    </HTMLProgressBar>
                    
                    <CSSHabilities>
                        <CSSIcon src={CSS} />
                        <Paragraph>CSS</Paragraph>
                    </CSSHabilities>
                    <CSSProgressBar>
                        <CSSFilledProgressBar width={CSSBarWidth} text={CSSBarWidth}>
                            <PercentageText>{CSSBarWidth}</PercentageText>
                        </CSSFilledProgressBar>
                    </CSSProgressBar>

                    <JSHabilities>
                        <JSIcon src={JS} />
                        <Paragraph>JAVASCRIPT</Paragraph>
                    </JSHabilities>
                    <JSProgressBar>
                        <JSFilledProgressBar width={JSBarWidth} text={JSBarWidth}>
                            <PercentageText>{JSBarWidth}</PercentageText>
                        </JSFilledProgressBar>
                    </JSProgressBar>

                </FrontEndCard>

                <DesignCard>
                    <Title2>FRONT-END</Title2>

                    <PSHabilities>
                        <PSIcon src={PS} />
                        <Paragraph>PHOTOSHOP</Paragraph>
                    </PSHabilities>
                    <PSProgressBar>
                        <PSFilledProgressBar width={PSBarWidth} text={PSBarWidth}>
                            <PercentageText>{PSBarWidth}</PercentageText>
                        </PSFilledProgressBar>
                    </PSProgressBar>
                    
                    <FigmaHabilities>
                        <FigmaIcon src={Figma} />
                        <Paragraph>Figma</Paragraph>
                    </FigmaHabilities>
                    <FigmaProgressBar>
                        <FigmaFilledProgressBar width={FigmaBarWidth} text={FigmaBarWidth}>
                            <PercentageText>{FigmaBarWidth}</PercentageText>
                        </FigmaFilledProgressBar>
                    </FigmaProgressBar>

                    <AIHabilities>
                        <AIIcon src={AI} />
                        <Paragraph>ILLUSTRATOR</Paragraph>
                    </AIHabilities>
                    <AIProgressBar>
                        <AIFilledProgressBar width={AIBarWidth} text={AIBarWidth}>
                            <PercentageText>{AIBarWidth}</PercentageText>
                        </AIFilledProgressBar>
                    </AIProgressBar>

                </DesignCard>
              </HabilitiesCard>
            </Container>
      );
    }