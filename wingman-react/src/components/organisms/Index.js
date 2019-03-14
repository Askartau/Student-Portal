import React, { Component } from 'react';
import logo from '../../assets/img/logo-white.svg';
import { Link } from "react-router-dom";
import Jumbotron from '../moleculas/Jumbotron';
import Video from '../moleculas/Video';
import AboutUs from '../moleculas/AboutUs';
import Slider from '../moleculas/Slider';
import FirstContent from '../moleculas/FirstContent';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
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
        return(
            <>
                <Jumbotron />
                <Video />
                <AboutUs />

                <Slider />
                <FirstContent />
            
            </>
        );
    }
}

export default Index;