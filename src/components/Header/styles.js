import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';

export const HeaderStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    position: fixed;
    left:0px;
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
        margin: 10px;
        text-decoration: none;
        color: #fff;
        :hover{
            color: #47B5FF;
        }
    }
`;

export const LinkStyled = styled(HashLink)`
    margin: 10px;
`;

export const LinkContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
`;