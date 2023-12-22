import React from 'react';
import styled from 'styled-components'
import revealIcon from '../images/revealIcon.png'
const Reveal = () => {
    return (
        <Wrapper id='react-reveal'>
            <div>
                <h1>React Reveal</h1>
                <p>React Reveal is an animation framework, It can be used to create various cool reveal on scroll animations in your application</p>
                <a href="https://www.react-reveal.com/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={revealIcon} alt="" />
        </Wrapper>
    );
}

export default Reveal;
const Wrapper = styled.div`
    height: 100vh;
    padding: 100px;
    background-color: #2815d6;
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
            color: #ffbe0b;
            &:hover{
            color: #f48c06;
                
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

