import React from 'react';
import styled from 'styled-components'
const Header = () => {
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
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-light" type="submit">Search</button>
                        </form>
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
    nav{
        color: white;
    }
    .header{
        padding: 150px 100px;
    }

`

