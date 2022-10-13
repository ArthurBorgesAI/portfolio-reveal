import styled from 'styled-components';

export const Screen = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #483434;
`;

export const Header = styled.div`
    display: flex;
    height: 5vh;
    align-items: center;
    justify-content: space-between;
    background: black;
`;

export const Link = styled.a`
    margin: 0 10px 0 10px;
    text-decoration: none;
    color: #fff;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
`;

export const Picture = styled.img`
    position:relative;
    top: 5%;
    width: 80%;
    aspect-ratio:  1/1;
    border-radius: 10px;
`;