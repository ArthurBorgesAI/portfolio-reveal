import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const Slider = styled.div`
    white-space: nowrap;
    transition: ease 1000ms;
    transform:  translate3d(${props =>props.index}%, 0, 0);
`;

export const Image = styled.img`
    height: 10rem;
    width: 20rem;
`;