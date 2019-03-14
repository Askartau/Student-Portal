import React, { Component } from 'react';
import logo from '../../assets/img/logo-white.svg';

class Footer extends Component {
    
    render(){
        return (
            <footer className="bg-gray text-light footer-long">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img alt="Image" src={logo} className="mb-4" />
                            <p className="text-muted">
                                &copy; 2018 Almaty
                                <br />KBTU students' rights
                            </p>
                        </div>
                        <div className="col-12 col-md-9">
                            <span className="h5">Contact us if you want to order project. Tel: +7(777)-210-7915</span>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;