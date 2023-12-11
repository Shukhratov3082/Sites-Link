import React, { useRef, useState } from 'react';
import styled from 'styled-components'
import FavIcon from '../favIcon/FavIcon';
const Header = () => {
    const [value, setValue] = useState()
    const ref = useRef(null)
    const getvalue = ({ target, key }) => {
        if (key === 'Enter') {
            setValue(target.value)
            const e = document.querySelector(`#${target.value}`)
            e.scrollIntoView({ behavior: 'smooth' })
            console.log(e);

        }

    }
    const ishla = () => {


    }

    return (
        <Wrapper>
            <nav className="navbar p-3 navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">StyledSite</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>
                        </ul>
                        <div className='form'>
                            <div className=" d-flex" role="submit">
                                <input className="form-control me-2" onKeyDown={props => getvalue(props)} type="search" placeholder="Search" />
                                <button onClick={ishla} className="btn btn-outline-success text-light" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='header'>
                <h1>Css Styles site</h1>
                <p>This site is for learning styles and getting code for different styles</p>

            </div>
        </Wrapper>
    );
}

export default Header;
const Wrapper = styled.div`
    height: 100vh;
    .header{
        padding: 150px 100px;
    }

`

