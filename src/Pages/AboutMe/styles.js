import styled from "styled-components";

/* Estilo do container principal  */

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 500px;
    background-color: #8F00FF;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`

/* Estilo do container do perfil  */

export const Title = styled.h1`
    font-size: 30px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.07em;
`

export const Subtitle = styled.h2`
    font-size: 20px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.07em;
    text-align: center;
    padding: 15px 0;
`

export const Paragraph = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 124%;
    text-align: center;
    color:#fff;
    width: 975px;
    height: 310px;
    padding: 15px 0;
`