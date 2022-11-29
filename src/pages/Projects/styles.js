import styled from 'styled-components';
import { Pagination } from 'antd';

export const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    overflow: hidden;
    margin-top: 3rem;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 3rem;
`;

export const ProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 30rem;
`;

export const PaginationStyled = styled(Pagination)`
    color: white;
    svg{
        color:white;
    }
`;