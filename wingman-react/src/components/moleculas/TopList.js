import React, { Component } from 'react';

class TopList extends Component {
    render() {
        return(
            <div className="media align-items-center">
                <a href="#" className="mr-4">
                    <img alt="Image" src="assets/img/graphic-product-sidekick-thumb.jpg" className="rounded avatar avatar-lg" />
                </a>
                <div className="media-body">
                    <div className="d-flex justify-content-between mb-2">
                        <div>
                            <a href="#" className="mb-1">
                                <h4>Sidekick</h4>
                            </a>
                            <span>Holistic fitness tracking</span>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="SidekickButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="icon-dots-three-horizontal"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="SidekickButton">
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Share</a>
                                <a className="dropdown-item" href="#">Comment</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Report</a>
                            </div>
                        </div>
                    </div>
                    <a className="badge badge-secondary badge-pill mb-2" href="#">Health &amp; Fitness</a>
                    <div className="text-small">
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="icon-heart"></i> 221</li>
                            <li className="list-inline-item"><i className="icon-message"></i> 14</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopList