import React from 'react';
import styled from 'styled-components'
import SiteImg from '../images/colorSite.png'
const ColorGeneration = () => {
    return (
        <Wrapper id='color-generation'>
            <div>
                <h1>Color generation</h1>
                <p>You can search for different colors and get the code</p>
                <a href="https://coolors.co/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={SiteImg} alt="" />
        </Wrapper>
    );
}

export default ColorGeneration;
const Wrapper = styled.div`
    background-color: #cc5ed0;
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
            &:hover{color: #0b5cff;}
        }
    }
`

