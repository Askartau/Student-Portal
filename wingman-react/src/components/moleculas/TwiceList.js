import React, { Component } from 'react';
import Subject from './Subject';
import Teacher from './Teacher';

class TwiceList extends Component {

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
                                        <a className="nav-link active" id="teachers-tab" data-toggle="tab" href="#teachers" role="tab" aria-controls="teachets" aria-selected="true">Teachers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="subjects-tab" data-toggle="tab" href="#subjects" role="tab" aria-controls="subjects" aria-selected="false">Subjects</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flush-with-above">
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="teachers" role="tabpanel" aria-labelledby="teachers-tab">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                                
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Teacher />
                                </div>
                            </div>
                        </div>    
                    </div>
                
                    <div className="tab-pane fade" id="subjects" role="tabpanel" aria-labelledby="subjects-tab">
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

export default TwiceList;