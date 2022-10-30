import styled from 'styled-components';

export const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #256D85;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 90%;
    width: 70%;
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow:hidden;
    height: 15rem;
    width: 90%;
`;

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60rem;
    height: 30rem;
`;