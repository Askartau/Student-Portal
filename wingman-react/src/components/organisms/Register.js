import React, { Component } from 'react';
import RegisterCard from "../moleculas/RegisterCard";
import InformationCard from "../moleculas/InformationCard";


class Register extends Component {
    render() {
        return(
            <>
            <div class="main-container">
            <section class="space-sm">
                <div class="container">
                    <div class="row mb-5">
                        <div class="col text-center">
                            <a href="index.html">
                                <img alt="Image" src="assets/img/logo-gray.svg" />
                            </a>
                        </div>
                    </div>
                    <div class="row flex-md-row card card-lg">
                        <RegisterCard />
                        <InformationCard />
                    </div>
                    <div class="text-center">
                        <span class="text-small">Already have an account? <a href="#">Log in here</a>
                        </span>
                    </div>
                </div>
            </section>
        </div>
        </>
        );
    }
}
export default Register;