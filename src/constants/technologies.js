import styled, { css } from 'styled-components';
import {Html5, Css3, Nodejs, ReactLogo, Python, Django} from '@styled-icons/boxicons-logos'
import {Js} from '@styled-icons/fa-brands'
import {Mysql} from '@styled-icons/simple-icons'

const flipOnHover  =  css`
    transition: transform .3s;
    :hover{
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
`;
const HtmlIcon = styled(Html5)`
    color: #E44D26;
    ${flipOnHover}
`;
const CssIcon = styled(Css3)`
    color: #1572B6;
    ${flipOnHover}
`;
const NodeIcon = styled(Nodejs)`
    color: #83CD29;
    ${flipOnHover}
`;
const ReactIcon = styled(ReactLogo)`
    color: #61DAFB;
    ${flipOnHover}
`;
const JsIcon = styled(Js)`
    color: #F0DB4F;
    ${flipOnHover}
`;
const MysqlIcon = styled(Mysql)`
    color: #00618A;
    ${flipOnHover}
`;
const PythonIcon = styled(Python)`
    color: #fff;
    ${flipOnHover}
`;
const DjangoIcon = styled(Django)`
    color: #103E2E;
    ${flipOnHover}
`;

const technologies = [
    { id: "html", name: "HTML5", icon: <HtmlIcon /> },
    { id: "css", name: "CSS3", icon: <CssIcon /> },
    { id: "js", name: "JavaScript", icon: <JsIcon /> },
    { id: "python", name: "Phyton", icon: <PythonIcon /> },
    { id: "node", name: "Node.js", icon: <NodeIcon /> },
    { id: "mysql", name: "MySQL", icon: <MysqlIcon /> },
    { id: "react", name: "React", icon: <ReactIcon /> },
    { id: "django", name: "Django", icon: <DjangoIcon /> },
];

export default technologies;