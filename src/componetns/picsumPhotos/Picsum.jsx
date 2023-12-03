import React from 'react';
import styled from 'styled-components'
import PicsumImage from '../images/picsum.png'
const Picsum = () => {
    return (
        <Wrapper className='container-fluid'>
            <div>
                <h1>Random Photos</h1>
                <p>Here you can take random photos using URL, Where you can change the width and height using the URL</p>
                <h4>How it works</h4>
                <p className='aboutWork'>https://picsum.photos/200/300 <br /> 200 its width 300 its height, the numbers like 200px and 300px <br />Every time you use this URL you will get a different image.</p>
                <span>More information on the link</span>
                <a href="https://picsum.photos/" target='_blank'>go to link</a>
            </div>
            <img src={PicsumImage} alt="" />
        </Wrapper>
    );
}

export default Picsum;
const Wrapper = styled.div`
    height: 100vh;
    padding: 100px;
    background-color: #0096c7;
    display: flex;
    align-items: center;
    
    div{
        width: 50%;
        font-family: sans-serif;
        color: #fff;
        h1{
            color: white;
            font-weight: 600;
            margin: 0;
        }
        p{
            width: 80%;
            font-size: 1vw;
            color: white;
        }
        span{
            font-size: 1.3vw;

            display: block;
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

