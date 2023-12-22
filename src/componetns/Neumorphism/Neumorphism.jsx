import React from 'react';
import styled from 'styled-components'
import neumorphism from '../images/neumorphism.png'
const Neumorphism = () => {
    return (
        <Wrapper id='neumorphism'>
            <div>
                <h1>Neumorphism</h1>
                <p>Generate Soft-UI CSS code, there you can create a box with changing radius, size, blur, and in this link you can find different CSS codes similar to the cards buttons inputs.</p>
                <a href="https://neumorphism.io/" target='_blank'>go to link</a>
            </div>
            <img src={neumorphism} alt="" />
        </Wrapper>
    );
}

export default Neumorphism;
const Wrapper = styled.div`
    height: 100vh;
    padding: 100px;
    background-color: #594d4d;
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
            &:hover{
            color: #00a6ff;
                
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

