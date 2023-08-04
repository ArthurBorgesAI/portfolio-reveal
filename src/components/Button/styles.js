import styled from 'styled-components';

export const ButtonStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3em;
    background-color: #fff;
    border-radius: 5px;
    color: #333;
    font-size: 1.7rem;
    text-decoration: none;

    transition: transform .3s;
    :hover{
        box-shadow: 0 0 11px #fff;
        transform: scale(1.3);
    }
`;