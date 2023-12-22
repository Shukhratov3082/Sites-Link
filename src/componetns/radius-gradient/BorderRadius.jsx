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
    height: 100vh;
    padding: 100px;
    background-color: #6c15d6;
    display: flex;
    align-items: center;
    div{
        width: 50%;
        font-family: sans-serif;
        h1{
            color: white;
            font-weight: 600;
            margin: 0;
        }
        p{
            width: 80%;
            color: white;
        }
        a{
            text-decoration: none;
            font-size: 20px;
            font-weight: 600;
            color: #00ffde;
            padding: 14px 10px;
            background: rgb(201,0,255);
            animation: morph 3s ease-in-out infinite both alternate;
            &:hover{
                color: #00a6ff;      
            }
            @keyframes morph {
                0% {border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;} 
                100% {border-radius: 40% 60%;} 
            }
        }
    }
    img{
        width: 50%;
        background-position: center;
        border: 1px solid white;
        border-radius: 12px;
        object-fit: contain;
        box-shadow: 0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d, 0 -6px 16px -6px #00000008;
      
    }
    
`

