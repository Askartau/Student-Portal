import React, { Component } from 'react';

class InformationCard extends Component {
    render() {
        return(
            <div class="col-12 col-md-5 card-body">
                
                <div class="mb-5 text-center">
                    <h3 class="h2 mb-2">Features &amp; Benefits</h3>
                    <span>All plans come with 14 days free</span>
                </div>
                <ul class="list-unstyled list-spacing-sm mb-5 ">
                    <li class="row">
                        <div class="col-2 col-md-1"><i class="icon-check h5 text-muted"></i>
                        </div>
                        <div class="col-10">Introduce the major benefits of your product and set the scene for what's to come</div>
                    </li>
                    <li class="row align-items-center">
                        <div class="col-2 col-md-1"><i class="icon-check h5 text-muted"></i>
                        </div>
                        <div class="col-10">Make a bold new start today</div>
                    </li>
                    <li class="row">
                        <div class="col-2 col-md-1"><i class="icon-check h5 text-muted"></i>
                        </div>
                        <div class="col-10">Describe some key features of this aspect of the product</div>
                    </li>
                    <li class="row align-items-center">
                        <div class="col-2 col-md-1"><i class="icon-check h5 text-muted"></i>
                        </div>
                        <div class="col-10">Make a bold new start today</div>
                    </li>
                </ul>

                <div class="card card-sm shadow text-left">
                    <div class="card-body p-4">
                        <div class="media">
                            <img alt="Image" src="assets/img/avatar-male-1.jpg" class="avatar avatar-xs" />
                            <div class="media-body">
                                <p class="mb-1 text-small">
                                    “Let’s get one thing straight, this theme’s a straight-up winner. No posers here, just beautiful design and code.”
                                </p>
                                <small>Daniel Cameron</small>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        );
    }
}
export default InformationCard;