import React, { Component } from 'react';
import Description from '../moleculas/Description';
import SortBy from '../moleculas/SortBy';
import OrderIcon from '../moleculas/OrderIcon';

import photo from "../../assets/img/avatar-male-1.jpg"

class Orders extends Component {
    render() {
        return(
            <>
           <Description />
           <section class="flush-with-above">
           <div class="container">
                <SortBy />
           <div class="row">
                <div class="col">
                    <table class="table table-borderless table-hover align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Authorised By</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                            <OrderIcon />
                        </tbody>
                    </table>  
                </div>
           </div>
           </div>
           </section>
        </>
        );
    }
}
export default Orders;