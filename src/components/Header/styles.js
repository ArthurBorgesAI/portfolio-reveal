import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    height: 6vh;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 0 3rem 0 3rem;
    border-bottom: #fff .1rem solid;
    z-index: 100;
    background: #0f0f0f;
    overflow:hidden;

    a{
        text-decoration: none;
        color: #fff;
        :hover{
            transform: scale(1.3);
            color: #47B5FF;
        }
    }
`;

export const Link = styled(HashLink)`
    margin: 0 10px 0 10px;
    text-decoration: none;
    color: #fff;

    transition: transform .3s;
    :hover{
        transform: scale(1.3);
        color: #47B5FF;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
`;