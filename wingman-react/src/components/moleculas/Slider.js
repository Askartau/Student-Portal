import React, { Component } from 'react';

class Slider extends Component {

    render() {
        return(
            <section>
                <div className="main-carousel" data-flickity='{ "cellAlign": "center", "contain": true, "prevNextButtons": false, "pageDots":true, "wrapAround":true, "autoPlay":4000, "imagesLoaded":true, "initialIndex":3, "draggable":false }'>


                    <div className="carousel-cell col-9 col-md-8 col-lg-5 text-center">
                        <a href="#" className="d-block mb-3">
                            <img alt="Image" src="assets/img/graphic-product-bench.jpg" className="img-fluid rounded" />
                        </a>
                        <span className="h6">Bench - Accounting for creative people</span>
                    </div>



                    <div className="carousel-cell col-9 col-md-8 col-lg-5 text-center">
                        <a href="#" className="d-block mb-3">
                            <img alt="Image" src="assets/img/graphic-product-kin.jpg" className="img-fluid rounded" />
                        </a>
                        <span className="h6">Kin - The digital fashion assistant</span>
                    </div>



                    <div className="carousel-cell col-9 col-md-8 col-lg-5 text-center">
                        <a href="#" className="d-block mb-3">
                            <img alt="Image" src="assets/img/graphic-product-paydar.jpg" className="img-fluid rounded" />
                        </a>
                        <span className="h6">Paydar - Location based touch payments</span>
                    </div>





                    <div className="carousel-cell col-9 col-md-8 col-lg-5 text-center">
                        <a href="#" className="d-block mb-3">
                            <img alt="Image" src="assets/img/graphic-product-pitstop.jpg" className="img-fluid rounded" />
                        </a>
                        <span className="h6">Pitstop - Browser-based project management</span>
                    </div>




                </div>

            </section>
        );
    }
}

export default Slider;