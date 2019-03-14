import React, { Component } from 'react';
import photo from "../../assets/img/photo-man-phone.jpg"

class Video extends Component {

    render() {
        return(
            <section>
                <div className="container">
                    <div className="row justify-content-center text-center section-intro">
                        <div className="col-12 col-md-9 col-lg-8">
                            <span className="title-decorative">Meet The Future</span>
                            <h2 className="display-4">Introducing a new way</h2>
                            <span className="lead">An opportunity to introduce the major benefits of your product and set the scene for what's to come</span>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-10">
                            <div className="video-cover rounded">
                                <img alt="Image" src={photo} className="bg-image" />
                                <div className="video-play-icon">
                                    <i className="icon-controller-play"></i>
                                </div>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" data-src="https://www.youtube.com/embed/oYqvpjKJZkU?autoplay=1&amp;mute=1&amp;showinfo=0&amp;rel=0" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center section-outro">
                        <div className="col-lg-4 col-md-5">
                            <h6>Introducing a new way</h6>
                            <p>An opportunity to introduce the major benefits of your product and set the scene for what's to come</p>
                            <a href="#">View more features &rsaquo;</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Video;