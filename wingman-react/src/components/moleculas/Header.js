import React, { Component } from 'react';
import logo from '../../assets/img/logo-white.svg';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    onLogout = () => {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        return (
            <div className="nav-container">
                <div className="bg-dark navbar-dark">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                        
                            <a className="navbar-brand" href="index.html">
                                <img alt="Wingman" src={logo} />
                            </a>
                        
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="icon-menu h4"></i>
                            </button>
    
                            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                            { this.state.isLoggedIn &&
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/intro/" className="nav-link">About us</Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link to="/faculties/" className="nav-link dropdown-toggle" id="pagesDropdown" role="button" data-toggle="dropdown">Faculties</Link>
                                        <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                                        
                                            <a className="dropdown-item" href="pages-landing.html">
                                                <span className="h6 mb-0">FIT</span>
                                                <p className="text-small text-muted">Just code it</p>
                                            </a>

                                            <div className="dropdown-divider"></div>


                                            <a className="dropdown-item" href="pages-app.html">
                                                <span className="h6 mb-0">ISE</span>
                                                <p className="text-small text-muted">Only the strongest survive</p>
                                            </a>

                                            <div className="dropdown-divider"></div>


                                            <a className="dropdown-item" href="pages-inner.html">
                                                <span className="h6 mb-0">BS</span>
                                                <p className="text-small text-muted">blablabla</p>
                                            </a>


                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="componentsDropdown" role="button" data-toggle="dropdown">Orders</a>
                                        <div className="dropdown-menu" aria-labelledby="componentsDropdown">

                                            <a className="dropdown-item" href="components-bootstrap.html">Order one</a>

                                            <a className="dropdown-item" href="components-wingman.html">Do one</a>

                                        </div>
                                    </li>
                            
                                </ul>
                            }
                                <ul className="navbar-nav"></ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="#">Sign up</a>
                                        <span>&nbsp;or&nbsp;</span><a href="#">Sign in</a>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;