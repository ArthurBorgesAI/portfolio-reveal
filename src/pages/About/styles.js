import styled from 'styled-components';

export const Screen = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #06283D;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 95vh;
    width: 80%;
`;

export const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Picture = styled.img`
    position:relative;
    width: 60%;
    aspect-ratio:  1/1;
    border-radius: 10px;
    margin-top: 10%;
    margin-bottom: 3%;

    transition: transform .3s, border-radius .3s;
    :hover{
        transform: scale(1.3);
        border-radius: 100%;
    }
`;

export const Profession = styled.div`
    color: #FFF3E4;
    background-color: #256D85;
    border-radius: 5px;
    padding: .6rem .4rem;
    width: 35%;
`;


export const RevealingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background-color: #EED6C4;
    border-radius: 10px;
    margin: 10px;
    padding: 5%;

    height: 70vh;
    width: 50vw;

    transition: 0.3s;
    :hover{
        background: #256D85;
    }
    :hover:after{
        content: '${props => props.content}';
        color: #fff;
    }
`;