import React from 'react';
import styled from 'styled-components'
import borderIcon from '../images/border-radius.png'
const Radius = () => {
    return (
        <Wrapper id='border-radius'>
            <div>
                <h1>Border Radius Gradient</h1>
                <p>This is a border radius generation where you can choose any shape.</p>
                <a href="https://9elements.github.io/fancy-border-radius/#27.59.63.44--." target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={borderIcon} alt="" />
        </Wrapper>
    );
}

export default Radius;
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
            padding: 14px 10px;
            background: rgb(201,0,255);
            animation: morph 3s ease-in-out infinite both alternate;
            &:hover{color: #00a6ff;}
            @keyframes morph {
                0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} 
                100% {border-radius: 40% 60%;} 
            }
        }
    }
`

