import React from 'react';
import styled from 'styled-components'
import reactIcons from '../../assets/images/reactIcons.png'
const ReactIcon = () => {
    return (
        <Wrapper id='react-icon'>
            <div>
                <h1>React Icons</h1>
                <p>Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
                <a href="https://react-icons.github.io/react-icons/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={reactIcons} alt="" />
        </Wrapper>
    );
}

export default ReactIcon;
const Wrapper = styled.div`
    background-color: #6c15d6;
    div{
        width: 50%;
        font-family: sans-serif;
        h1{
            color: white;
            font-weight: 600;
            margin: 0;
        }
        a{
            color: #00ffde;
            &:hover{color: #00a6ff;}
        }
    } 
`

