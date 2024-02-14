import React from 'react';
import styled from 'styled-components'
import swiperBg from '../../assets/images/swiper.png'
const Swiper = () => {
    return (
        <Wrapper id='swiper'>
            <div>
                <h1>React Swiper</h1>
                <p>Swiper is a free and open source mobile touch slider with hardware accelerated transitions and native behavior</p>
                <a href="https://swiperjs.com/" target='_blank' rel="noopener noreferrer">go to link</a>
            </div>
            <img src={swiperBg} alt="" />
        </Wrapper>
    );
}

export default Swiper;
const Wrapper = styled.div`
    background-color: #010b61;
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

