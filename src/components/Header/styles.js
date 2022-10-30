import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Header = styled.div`
    display: flex;
    height: 7vh;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: #000;
    padding: 0 3rem 0 3rem;

`;

export const Link = styled(HashLink)`
    margin: 0 10px 0 10px;
    text-decoration: none;
    color: #fff;

    transition: transform .3s;
    :hover{
        transform: scale(2);
        color: #47B5FF;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 40%;
`;