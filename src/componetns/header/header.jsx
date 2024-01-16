import React, { useState } from "react";
import styled from "styled-components";
const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [listVisible, setListVisible] = useState(false);

  const items = [
    "color generation",
    "react icon",
    "react toastify",
    "neumorphism",
    "swiper",
    "react reveal",
    "border radius",
    "picsum",
    "text generation",
    "favIcon",
  ];
  const filtered = items.filter((item) => item);
  const [filteredItems, setFilteredItems] = useState(filtered);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    setListVisible(filtered.length > 0); // agar value itemga mos kemasa listVisible false bo'ladi
  };

  const KeyDown = (event) => {
    if (event.key === "Enter") {
      const matchingItems = items.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      if (matchingItems.length > 0) {
        console.log(matchingItems[0].toLowerCase().replace(/ /g, "-"));
        const element = document.getElementById(
          matchingItems[0].toLowerCase().replace(/ /g, "-")
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        alert(`this "${inputValue}" element not found`);
      }
    }
  };
  return (
    <Wrapper>
      <nav className="navbar  py-3 px-5 navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <a className="navbar-brand text-light " href="/">
            Shukhratov
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Link
                </a>
              </li>
            </ul>
            <div className="form">
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  onBlur={() => setListVisible(false)}
                  onFocus={() => setListVisible(true)}
                  onChange={handleInputChange}
                  onKeyDown={KeyDown}
                  type="search"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-success text-light"
                  type="button"
                >
                  Search
                </button>
                {listVisible && (
                  <ul id="list">
                    {filteredItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
const Wrapper = styled.header`
  height: 72px;
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    input {
      position: relative;
    }
  }

  #list {
    min-width: 100px;
    width: auto;
    height: 150px;
    overflow-y: auto;
    list-style: none;
    background: #ffffff;
    font-weight: 600;
    border: 1px solid #b3b0b08f;
    border-radius: 2px;
    position: absolute;
    top: 90%;
    bottom: -150px;
    color: #201414;
    padding: 5px;
    li {
      border-bottom: 1px solid gray;
      cursor: pointer;
    }
  }
`;
