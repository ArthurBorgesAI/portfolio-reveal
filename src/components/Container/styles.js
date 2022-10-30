import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #EED6C4;
    border-radius: 10px;
    margin: 10px;
    overflow:auto;

    height: ${props => props.height};
    width: ${props => props.width};
`;