import React from 'react';
import styled from 'styled-components'
import makeTextImage from '../images/maketext.png'
const MakeText = () => {
    return (
        <Wrapper id='text-generation'>
            <div>
                <h1>Text Generation</h1>
                <p>This is the generation of text where different colors and designs</p>
                <a href="https://maketext.io/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={makeTextImage} alt="" />
        </Wrapper>
    );
}

export default MakeText;
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

