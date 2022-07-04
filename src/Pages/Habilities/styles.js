import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 400px;
    background-color: #8F00FF;
    margin: auto;
    align-items: center;
`
export const Title = styled.h1`
    font-size: 30px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.05em;
    padding: 10px 0;
`
export const HabilitiesCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
`

export const Title2 = styled.h2`
    font-size: 24px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.07em;
    align-self: center;
    padding: 0;
    margin: 5px;
`

export const Paragraph = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    margin: 0;
`
export const PercentageText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    color: #fff;
    margin: 0;
    padding: 5px;
`

/* Front-End Habilities Card */

export const FrontEndCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 266px;
    height: 252px;
    gap: 12px;
    background-color: #8800F2;
    border-radius: 10px;
`

export const HTMLHabilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 10px;
`

export const HTMLIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const HTMLProgressBar = styled.div`
    width: 200px;
    height: 12px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-left: 12px;
`
export const HTMLFilledProgressBar = styled.div`
    width: ${(props) => props.width || "50%"};
    height: 100%;
    border-radius: 10px;
    background-color: #7000C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const CSSHabilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 10px;
    `

export const CSSIcon = styled.img`
    width: 30px;
    height: 30px;
    `
export const CSSProgressBar = styled.div`
    width: 200px;
    height: 12px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-left: 12px;
`
export const CSSFilledProgressBar = styled.div`
    width: ${(props) => props.width || "50%"};
    height: 100%;
    border-radius: 10px;
    background-color: #7000C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const JSHabilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 10px;
`

export const JSIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const JSProgressBar = styled.div`
    width: 200px;
    height: 12px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-left: 12px;
`
export const JSFilledProgressBar = styled.div`
    width: ${(props) => props.width || "50%"};
    height: 100%;
    border-radius: 10px;
    background-color: #7000C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
/* Design Habilities Card */

export const DesignCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 266px;
    height: 252px;
    gap: 12px;
    background-color: #8800F2;
    border-radius: 10px;
`

export const PSHabilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 10px;
`

export const PSIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const PSProgressBar = styled.div`
    width: 200px;
    height: 12px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-left: 12px;
`
export const PSFilledProgressBar = styled.div`
    width: ${(props) => props.width || "50%"};
    height: 100%;
    border-radius: 10px;
    background-color: #7000C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const FigmaHabilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 10px;
    `

export const FigmaIcon = styled.img`
    width: 30px;
    height: 30px;
    `
export const FigmaProgressBar = styled.div`
    width: 200px;
    height: 12px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-left: 12px;
`
export const FigmaFilledProgressBar = styled.div`
    width: ${(props) => props.width || "50%"};
    height: 100%;
    border-radius: 10px;
    background-color: #7000C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const AIHabilities = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding-left: 10px;
`

export const AIIcon = styled.img`
    width: 30px;
    height: 30px;
`

export const AIProgressBar = styled.div`
    width: 200px;
    height: 12px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    margin-left: 12px;
`
export const AIFilledProgressBar = styled.div`
    width: ${(props) => props.width || "50%"};
    height: 100%;
    border-radius: 10px;
    background-color: #7000C9;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`