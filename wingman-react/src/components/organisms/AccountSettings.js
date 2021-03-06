import React, { Component } from 'react';

class AccountSettings extends Component {
    render() {
        return(
            <div class="main-container">
                <section class="bg-white space-sm pb-4">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <div class="col-auto">
                                <h1 class="h2">Account Settings</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="flush-with-above space-0">
                    <div class="bg-white">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">General</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </section>
                <section class="flush-with-above height-80 d-block">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="general" role="tabpanel" aria-labelledby="general-tab">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="media flex-wrap mb-0 align-items-center">
                                            <img alt="Image" src="assets/img/avatar-male-3.jpg" class="avatar avatar-lg mb-3 mb-md-0" />
                                            <div class="media-body">
                                                <form>
                                                    <label class="custom-file mb-2" for="file2">
                                                        <input type="file" id="file2" class="custom-file-input height-0" />
                                                        <span class="btn btn-primary"><i class="icon-upload-to-cloud">&nbsp;</i>Upload</span>
                                                    </label>
                                                    <div>
                                                        <small>For best results, use an image at least 256px by 256px in either .jpg or .png format</small>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <hr/>
                                <div class="row mb-4">
                                    <div class="col">
                                        <h5>Account Details</h5>
                                    </div>
                                </div>
                                
                                <div class="row">
                                    <div class="col-12 col-md-4 order-md-2">
                                        <div class="alert alert-info text-small" role="alert">
                                            <i class="icon-shield"></i>
                                            <span>
                                                Your information is always kept encrypted and can never be accessed by third parties.
                                            </span>
                                            <a href="#">See our privacy policy</a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-8 order-md-1">
                                        <form class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="first-name">First Name:
                                                        <span class="text-red">*</span>
                                                    </label>
                                                    <input class="form-control form-control-lg" type="text" name="firstName" value="Alannah" id="first-name" />
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="last-name">Last Name:</label>
                                                    <input class="form-control form-control-lg" type="text" name="lastName" value="Cunningham" id="last-name" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="username">Username:
                                                        <span class="text-red">*</span>
                                                    </label>
                                                    <input class="form-control form-control-lg" type="text" name="userName" id="username" />
                                                    <small>This will be displayed on your public profile</small>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="emailaddress">Email Address:
                                                        <span class="text-red">*</span>
                                                    </label>
                                                    <input class="form-control form-control-lg" type="email" name="emailAddress" id="emailaddress" />
                                                    <small>Used to log in to your account</small>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <button class="btn btn-secondary" type="submit" disabled>Save changes</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row mb-4">
                                    <div class="col">
                                        <h5>Profile Information</h5>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-4 order-md-2">
                                        <div class="alert alert-info text-small" role="alert">
                                            <i class="icon-user"></i>
                                            <span>
                                                This information will appear on your public profile. A detailed public profile helps users with similar professional interests and location to connect with you.
                                            </span>
                                            <a href="#">View your public profile</a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-8 order-md-1">
                                        <form class="row">
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="city">City:</label>
                                                    <input class="form-control form-control-lg" type="text" name="profileCity" value="Melbourne" id="city" />
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="form-group">
                                                    <label for="country">Country:</label>
                                                    <input class="form-control form-control-lg" type="text" name="profileCountry" value="Australia" id="country" />
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="website">Website:</label>
                                                    <input class="form-control form-control-lg" type="text" name="profileWebsite" id="website" />
                                                    <small>This will be displayed on your public profile</small>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="twitter">Twitter Handle:</label>
                                                    <div class="input-group input-group-lg">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">@</span>
                                                        </div>
                                                        <input type="text" class="form-control" placeholder="Username" aria-label="twitterUsername" name="profileTwitter" id="twitter" />
                                                    </div>
                                                </div>
                                            </div>        
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="about-me">About me:</label>
                                                    <textarea class="form-control form-control-lg" name="profileBio" rows="4" id="about-me"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <div class="custom-control custom-checkbox custom-checkbox-switch">
                                                        <input type="checkbox" class="custom-control-input" name="profilePublic" id="public" />
                                                        <label class="custom-control-label" for="public">Make my profile public</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <button class="btn btn-secondary" type="submit" disabled>Save changes</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>    
                </section>
            </div>
        );
    }
}

export default AccountSettings;