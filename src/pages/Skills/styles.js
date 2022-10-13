import styled from 'styled-components';
import {Html5, Css3, Nodejs, ReactLogo, Python, Django} from '@styled-icons/boxicons-logos'
import {Js} from '@styled-icons/fa-brands'
import {Mysql} from '@styled-icons/simple-icons'


export const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #483434;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 70%;
`;

export const TechsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    width: 100%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: .5rem;
    margin-top: 1%;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: .5rem;
    border: 1px solid #333;
    width: 90%;
    border-radius: 5px;

    :hover{
        box-shadow: 0 0 11px #000;
    }
`;


export const HtmlIcon = styled(Html5)`
    color: #E44D26;
`;

export const CssIcon = styled(Css3)`
    color: #1572B6;
`;

export const NodeIcon = styled(Nodejs)`
    color: #83CD29;
`;

export const ReactIcon = styled(ReactLogo)`
    color: #61DAFB;
`;

export const JsIcon = styled(Js)`
    color: #F0DB4F;
`;

export const MysqlIcon = styled(Mysql)`
    color: #00618A;
`;

export const PythonIcon = styled(Python)`
    color: #fff;
`;

export const DjangoIcon = styled(Django)`
    color: #103E2E;
`;