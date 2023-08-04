import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #333333;
    border-radius: 10px;
    margin: 3rem 0 3rem 0; 
    overflow:auto;

    height: ${props => props.height};
    width: ${props => props.width};
`;