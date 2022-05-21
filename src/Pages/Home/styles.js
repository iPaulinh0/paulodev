import styled from "styled-components";

/* Estilo do container principal  */

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #EEEEEE;
    background-image: url(background.png);
    margin: auto;
`

/* Estilo do container das redes sociais  */

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 25px 0;
`

export const ImageGit = styled.img`
    padding: 0 25px;
`
export const ImageLinkedin = styled.img`
    padding: 0 25px;
`
export const ImageInsta = styled.img`
    padding: 0 25px;
`

/* Estilo do conteúdo central da home  */

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const Image = styled.img`
    margin-bottom: 30px;
`

export const Title = styled.h1`
    font-size: 72px;
    font-family: 'Montserrat';
    font-weight: 800;
    color: #232323;
    margin: 0;
`

export const Subtitle = styled.h2`
    font-size: 25px;
    font-family: 'Montserrat';
    font-weight: 400;
    color: #232323;
    letter-spacing: 0.18em;
    margin: 0;
`

export const Intertitle = styled.h3`
    font-size: 22px;
    font-family: 'Montserrat';
    font-weight: 400;
    color: #232323;
    letter-spacing: 0.115em;
    margin: 0;
`

/* Estilo do container arrow  */

export const FinalContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`