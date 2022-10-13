import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: #EED6C4;
    border-radius: 10px;
    margin: 10px;
    overflow:clip;

    height: ${props => props.height};
    width: ${props => props.width};
`;