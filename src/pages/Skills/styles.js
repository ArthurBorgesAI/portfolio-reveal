import styled from 'styled-components';

export const Screen = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 3rem;
`;

export const TechsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 2rem;

    :nth-child(2){
        margin-bottom: 5rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 12%));
    gap: .5rem;
    margin-top: 1%;
    width: 90%;
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding:  .5rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;

    p{
        color:#A8A8A8;
        word-break: keep-all;
    }

    transition: transform .3s;
    :hover{
        transform: scale(1.3);
    }
`;