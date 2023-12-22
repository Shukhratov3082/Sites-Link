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
    height: 100vh;
    padding: 100px;
    background-color: #0096c7;
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
        box-shadow:0 13px 27px -5px #32325d40, 0 8px 16px -8px #0000004d, 0 -6px 16px -6px #00000008;
      
    }
    
`

