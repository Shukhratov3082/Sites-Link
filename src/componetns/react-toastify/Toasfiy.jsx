import React from "react";
import styled from "styled-components";
import toastifyIcon from "../../assets/images/toastifyIcon.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toastify = () => {
  const myFunction = () => {
    var x = document.getElementById("more");
    x.classList.toggle("hidden");
    x.classList.toggle("visible");
    toast.success("that's how it works");
  };
  return (
    <Wrapper id="react-toastify">
      <div>
        <h1>React Toastify</h1>
        <p>
          React-Toastify allows you to add notifications to your app with ease.
          it used for animated notifications
        </p>
        <div>
          <button className="btn btn-warning" onClick={myFunction}>
            How to use
          </button>
          <ol id="more" className="hidden">
            <li>npm i react-toastify</li>
            <li>
              import &#123;ToastContainer, toast&#125; from 'react-toastify';
            </li>
            <li>import 'react-toastify/dist/ReactToastify.css';</li>
            <li>add to event toast.success("that's how it works")</li>
            <li>must add &lt;ToastContainer&gt; in html</li>
          </ol>
          <a
            href="https://www.npmjs.com/package/react-toastify#SnippetTab"
            target="_blank"
            rel="noopener noreferrer"
          >
            go to link
          </a>
        </div>
      </div>
      <img src={toastifyIcon} alt="" />
    </Wrapper>
  );
};

export default Toastify;
const Wrapper = styled.div`
  background-color: #f77f00;
  div {
    font-family: sans-serif;
    transition: 0.3s ease;
    color: white;
    h1 {
      font-weight: 600;
      margin: 0;
    }
    .hidden {
      display: block;
      width: 28vw;
      opacity: 0;
      max-height: 0;
      transition: 0.5s ease;
    }

    .visible {
      display: block;
      opacity: 1;
      height: auto;
      transition: 0.5s ease;
    }

    button {
      display: block;
    }
    a {
      text-decoration: none;
      font-size: calc(var(--index) * 1.6);
      font-weight: 600;
      color: #023047;
      &:hover {
        color: #457b9d;
      }
    }
  }
`;
