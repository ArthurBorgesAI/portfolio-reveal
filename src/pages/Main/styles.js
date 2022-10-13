import styled from "styled-components";

export const Portfolio = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 3rem;
    gap: 3rem;

    h1{
        width: 100%;
        color: #FFF;
        font-size: 5rem;
        margin-bottom: 1rem;
        background: linear-gradient(90deg, #FFF3E4 0%, #6B4F4F 80%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const MainContainer = styled.div`
    background-color: #EED6C4;
    flex: 2 1 0;
    border-radius: 10px;
    padding: 3rem;

    h2{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #6B4F4F;
        font-size: 2.2rem;
        margin-bottom: 1.3rem;
        justify-content: start;
        gap: 1rem;

        &:after{
            content: "";
            background: linear-gradient(90deg, rgb(167, 121, 121) 0%, rgb(85, 57, 57) 98%);
            height: 3px;
            width: 50%;
            }
    }

    p{
        color: #6B4F4F;
        margin-bottom: 1rem;
        line-height: 1.3rem;
    }
`;