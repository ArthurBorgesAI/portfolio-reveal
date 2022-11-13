import styled from 'styled-components';

export const Screen = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    
    div{    
        max-width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 2rem;
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
    display: flex;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    padding: .6rem .4rem;
    width: 6rem;
`;


export const RevealingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background-color: #333333;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    padding: 5%;

    height: 35rem;
    width: 42rem;

    transition: 0.3s;
    :hover{
        background: #5C5C5C;
    }
    :hover:after{
        content: '${props => props.content}';
        color: #fff;
    }
`;