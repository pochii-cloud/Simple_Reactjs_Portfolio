import React from 'react'
import { Container, Navbar } from "react-bootstrap"
import '../Nav/Nav.css'
const Nav = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                <div class="container">
                    <a class="navbar-brand" href="">JohnTheDev</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="container">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="">Projects</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='container'>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div className='container'>

                        <a class="nav-link active" aria-current="page" href="">Home</a>

                        <a class="nav-link" aria-current="page" href="">About</a>

                        <a class="nav-link" aria-current="page" href="">Services</a>

                        <a class="nav-link" aria-current="page" href="">Projects</a>

                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

export default Nav
