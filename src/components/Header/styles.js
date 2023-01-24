import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    left:0px;
    height: 10vh;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    border-bottom: #fff .1rem solid;
    z-index: 100;
    background: #0f0f0f;
    
    
    overflow: auto;
    scrollbar-width: none;  
    ::-webkit-scrollbar {
        display: none;
    }

    a{
        text-decoration: none;
        color: #fff;
        :hover{
            color: #47B5FF;
        }
    }
`;

export const Link = styled(HashLink)`
    margin: 0 10px 0 10px;

`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
`;