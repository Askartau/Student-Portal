import React, { Component } from 'react';
import DFList from '../moleculas/DFList';
import FCard from '../moleculas/FCard';

class FacultyList extends Component {
    render() {
        return(
            <>
                <DFList/>
                <section class="flush-with-above">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <table class="table table-hover align-items-center table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Location</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                               <FCard/>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default FacultyList;