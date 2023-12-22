import React from 'react';
import styled from 'styled-components'
import favIconImage from '../images/faviIcon.png'
const FavIcon = () => {
    return (
        <Wrapper id='favicon'>
            <div>
                <h1>FavIcon</h1>
                <p>You can make any text an icon and download it in any size.</p>
                <a href="https://favicon.io/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={favIconImage} alt="" />
        </Wrapper>
    );
}

export default FavIcon;
const Wrapper = styled.div`
    background-color: #0096c7;
    div{
        width: 50%;
        font-family: sans-serif;
        h1{
            color: white;
            font-weight: 600;
            margin: 0;
        }
        a{
            color: #ffbe0b;
            &:hover{color: #f48c06;}
        }
    }
`

