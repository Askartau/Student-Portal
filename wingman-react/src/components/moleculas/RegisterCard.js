import React, { Component } from 'react';

class RegisterCard extends Component {
    render() {
        return(
            <div class="col-12 col-md-7 card-body bg-secondary">
                <div class="text-center mb-5">
                    <h1 class="h2 mb-2">Start creating immediately</h1>
                    <span>Delight your team and customers with Wingman</span>
                </div>
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-9">
                        <form>
                            <div class="form-row form-group">
                                <div class="col">
                                    <input class="form-control form-control-lg" type="text" id="username" placeholder=" Username" />
                                </div>
                            </div>
                            <div class="form-row form-group">
                                <div class="col">
                                    <input class="form-control form-control-lg" type="text" id="firstname" placeholder="First Name" />
                                </div>
                                <div class="col">
                                    <input class="form-control form-control-lg" type="text" id="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="form-row form-group">
                                <div class="col">
                                    <input class="form-control form-control-lg" type="email" id="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div class="form-row form-group">
                                <div class="col">
                                    <input class="form-control form-control-lg" type="number" id="number" placeholder="Phone number" />
                                </div>
                            </div>
                            <div class="form-row form-group">
                                <div class="col">
                                    <input class="form-control form-control-lg" type="password" id="password" placeholder="Password" />
                                    <small>Password must be at least 7 characters</small>
                                </div>
                            </div>
                            <div class="form-row form-group">
                                <div class="col">
                                    <button class="btn btn-block btn-success btn-lg" type="submit">Create Account</button>
                                </div>
                            </div>
                            <div class="text-center">
                                <span class="text-small text-muted">By clicking 'Create Account' you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a>&nbsp;and <a href="#">Security Policy</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default RegisterCard;