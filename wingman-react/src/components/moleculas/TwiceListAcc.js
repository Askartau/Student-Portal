import React, { Component } from 'react';
import Subject from './Subject';

class TwiceListAcc extends Component{
    render() {
        return(
            <>
            <section className="flush-with-above space-0">
                <div className="bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="projects-tab" data-toggle="tab" href="#projects" role="tab" aria-controls="projects" aria-selected="true">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false">Orders</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flush-with-above">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="projects" role="tabpanel" aria-labelledby="projects-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                            </div>
                        </div>    
                    </div>
                
                    <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Subject />
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default TwiceListAcc;