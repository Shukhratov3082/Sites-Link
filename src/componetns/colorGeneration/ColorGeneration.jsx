import React from 'react';
import styled from 'styled-components'
import SiteImg from '../images/colorSite.png'
const ColorGeneration = () => {
    return (
        <Wrapper>
            <div>
                <h1>Color generation</h1>
                <p>You can search for different colors and get the code</p>
                <a href="https://coolors.co/" target='_blank'>go to link</a>
            </div>
            <img src={SiteImg} alt="" />
        </Wrapper>
    );
}

export default ColorGeneration;
const Wrapper = styled.div`
    height: 100vh;
    padding: 100px;
    background-color: #cc5ed0;
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
            color: #0b5cff;
                
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

