import React, { Component } from 'react';
import logo from '../../assets/img/logo-white.svg';
import { Link } from "react-router-dom";
import VideoIntro from '../moleculas/VideoIntro';
import TopTeacherList from '../moleculas/TopTeacherList';


class Intro extends Component {
    render() {
        return(
            <>
                <section class="space-sm">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-12 col-md-8 col-lg-7">
                            <VideoIntro />
                            <TopTeacherList />
                            </div>
                        </div>
                    </div>
                </section>
               
            </>
        );
    }
}

export default Intro;