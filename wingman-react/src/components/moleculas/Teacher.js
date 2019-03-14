import React, { Component } from 'react';

class Teacher extends Component {
    render() {
        return(
            
            <div className="card">
                <div className="card-body">
                    <div className="media">
                        <a href="#" className="mr-3">
                            <img alt="Christina Hersinger" src="assets/img/avatar-female-6.jpg" className="avatar" />
                        </a>
                        <div className="media-body">
                            <div>
                                <a href="#" className="h5 m-0">
                                    <h5>Christina Hersinger</h5>
                                </a>
                                <small className="text-muted"><i className="icon-location"></i> Frankfurt, GER</small>
                            </div>
                            <ul className="list-inline">




                                <li className="list-inline-item text-small">134 Followers</li>

                                <li className="list-inline-item text-small">124 Following</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <a className="text-small" href="#">@chersinger</a>
                    <button className="btn btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Follow"><i className="icon-add-user"></i>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default Teacher;