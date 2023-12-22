import React from 'react';
import styled from 'styled-components'
import toastifyIcon from '../images/toastifyIcon.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toastify = () => {
    const myFunction = () => {
        var x = document.getElementById("more");
        x.classList.toggle("hidden");
        x.classList.toggle("visible");
        toast.success("that's how it works")
    };
    return (
        <Wrapper id='react-toastify'>
            <div>
                <h1>React Toastify</h1>
                <p>React-Toastify allows you to add notifications to your app with ease. it used for animated notifications</p>
                <div>
                    <button className='btn btn-warning' onClick={myFunction}>How to use</button>
                    <ol id='more' className="hidden">
                        <li>npm i react-toastify</li>
                        <li>import &#123;ToastContainer, toast&#125; from 'react-toastify';</li>
                        <li>import 'react-toastify/dist/ReactToastify.css';</li>
                        <li>add to event toast.success("that's how it works")</li>
                        <li>must add &lt;ToastContainer&gt; in html</li>
                    </ol>
                    <a href="https://www.npmjs.com/package/react-toastify#SnippetTab" target='_blank' rel="noopener">go to link</a>
                </div>
            </div>
            <img src={toastifyIcon} alt="" />
        </Wrapper>
    );
}

export default Toastify;
const Wrapper = styled.div`
    height: 100vh;
    padding: 100px;
    background-color: #f77f00;
    display: flex;
    align-items: center;
    div{
        width: 50%;
        font-family: sans-serif;
        transition:  .3s ease;
        color: white;
        h1{
            font-weight: 600;
            margin: 0;
        }
        .hidden {
            width: 28vw;
            opacity: 0;
            max-height: 0;
            transition:  0.5s ease;
        }

        .visible {
            display: inline-block;
            width: 28vw;
            opacity: 1;
            max-height: 100px;
            transition:  0.5s ease;
        }

        button{
            display: block;
        }
        a{
            text-decoration: none;
            font-size: 20px;
            font-weight: 600;
            color: #023047;
            &:hover{
            color: #457b9d;
                
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

