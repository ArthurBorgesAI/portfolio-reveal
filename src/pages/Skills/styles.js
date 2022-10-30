import styled, {  css } from 'styled-components';
import {Html5, Css3, Nodejs, ReactLogo, Python, Django} from '@styled-icons/boxicons-logos'
import {Js} from '@styled-icons/fa-brands'
import {Mysql, Adobephotoshop, Adobepremierepro} from '@styled-icons/simple-icons'


export const Screen = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #06283D;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    height: 90%;
    width: 100%;
`;

export const TechsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 23rem;

    :nth-child(2){
        height: 10rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
    gap: .5rem;
    margin-top: 1%;
    width: 65rem;
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

    transition: transform .3s;
    :hover{
        transform: scale(1.3);
    }
`;



const flipOnHover  =  css`
    transition: transform .3s;
    :hover{
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
`;

export const HtmlIcon = styled(Html5)`
    color: #E44D26;
    ${flipOnHover}
`;

export const CssIcon = styled(Css3)`
    color: #1572B6;
    ${flipOnHover}
`;

export const NodeIcon = styled(Nodejs)`
    color: #83CD29;
    ${flipOnHover}
`;

export const ReactIcon = styled(ReactLogo)`
    color: #61DAFB;
    ${flipOnHover}
`;

export const JsIcon = styled(Js)`
    color: #F0DB4F;
    ${flipOnHover}
`;

export const MysqlIcon = styled(Mysql)`
    color: #00618A;
    ${flipOnHover}
`;

export const PythonIcon = styled(Python)`
    color: #fff;
    ${flipOnHover}
`;

export const DjangoIcon = styled(Django)`
    color: #103E2E;
    ${flipOnHover}
`;

export const PhotoshopIcon = styled(Adobephotoshop)`
    color: #081e35;
    ${flipOnHover}
`;

export const PremiereIcon = styled(Adobepremierepro)`
    color: #201c57;
    ${flipOnHover}
`;