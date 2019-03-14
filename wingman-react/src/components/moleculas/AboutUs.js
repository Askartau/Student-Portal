import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return(
            <section>
                <div className="container">
                    <div className="row justify-content-center text-center section-intro">
                        <div className="col-12 col-md-9 col-lg-8">
                            <span className="title-decorative">Built for Performance</span>
                            <h2 className="display-4">Heavy on swish looks</h2>
                            <span className="lead">An opportunity to introduce the major benefits of your product and set the scene for what's to come</span>

                        </div>
                    </div>

                    <ul className="row feature-list feature-list-lg">
                        <li className="col-12 col-md-6">
                            <div className="media align-items-center">
                                <a href="#">
                                    <img alt="Image" className="avatar avatar-lg mr-4" src="assets/img/graphic-developer-bootstrap.png" />
                                </a>
                                <div className="media-body">
                                    <a href="#">Based on Bootstrap 4</a>
                                    <p className="mt-3">
                                        A short description of the aforementioned facet to easily digest, no need for too much detail.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="col-12 col-md-6">
                            <div className="media align-items-center">
                                <a href="#">
                                    <img alt="Image" className="avatar avatar-lg mr-4" src="assets/img/graphic-developer-gulp.png" />
                                </a>
                                <div className="media-body">
                                    <a href="#">Gulp Workflow</a>
                                    <p className="mt-3">
                                        A short description of the aforementioned facet to easily digest, no need for too much detail.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="col-12 col-md-6">
                            <div className="media align-items-center">
                                <a href="#">
                                    <img alt="Image" className="avatar avatar-lg mr-4" src="assets/img/graphic-developer-sass.png" />
                                </a>
                                <div className="media-body">
                                    <a href="#">Styled with Sass</a>
                                    <p className="mt-3">
                                        A short description of the aforementioned facet to easily digest, no need for too much detail.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="col-12 col-md-6">
                            <div className="media align-items-center">
                                <a href="#">
                                    <img alt="Image" className="avatar avatar-lg mr-4" src="assets/img/graphic-developer-html5.png" />
                                </a>
                                <div className="media-body">
                                    <a href="#">Built with HTML5</a>
                                    <p className="mt-3">
                                        A short description of the aforementioned facet to easily digest, no need for too much detail.
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>

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

export default AboutUs;