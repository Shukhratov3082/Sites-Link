import React from 'react';
import styled from 'styled-components'
import neumorphism from '../images/neumorphism.png'
const Neumorphism = () => {
    return (
        <Wrapper id='neumorphism'>
            <div>
                <h1>Neumorphism</h1>
                <p>Generate Soft-UI CSS code, there you can create a box with changing radius, size, blur, and in this link you can find different CSS codes similar to the cards buttons inputs.</p>
                <a href="https://neumorphism.io/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={neumorphism} alt="" />
        </Wrapper>
    );
}

export default Neumorphism;
const Wrapper = styled.div`
    background-color: #594d4d;
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

