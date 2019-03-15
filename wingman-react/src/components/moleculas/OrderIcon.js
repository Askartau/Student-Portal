import React, { Component } from 'react';
import photo from "../../assets/img/avatar-male-1.jpg"

class OrderIcon extends Component {
    render() {
        return(
            <tr class="bg-white">
            <th scope="row">
                <a class="media align-items-center" href="#">
                    <img alt="Image" src="assets/img/logo-snapchat.svg" class="avatar rounded avatar-sm" />
                    <div class="media-body">
                        <span class="h6 mb-0">Snapchat</span>
                        <span class="text-muted">Social Media</span>
                    </div>
                </a>
            </th>
            <td>Lucy</td>
            <td>13/12/2017</td>
            <td>
                <span class="badge badge-success">Active</span>
            </td>
            <td>
                <div class="dropdown">
                    <button class="btn btn-sm btn-outline-primary dropdown-toggle dropdown-toggle-no-arrow" type="button" id="dropdownMenuButton-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="icon-dots-three-horizontal"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Download</a>
                        <a class="dropdown-item" href="#">Share</a>
                        <a class="dropdown-item" href="#">Comment</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Delete</a>
                    </div>
                </div>
            </td>
        </tr>
        );
    }
}
export default OrderIcon;