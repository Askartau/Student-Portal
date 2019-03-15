import React, { Component } from 'react';
import photo from "../../assets/img/avatar-male-1.jpg"

class TeacherIcon extends Component {
    render() {
        return(
            <li>
            <a class="media" href="#">
                <img alt="Image" src="assets/img/avatar-male-1.jpg" class="avatar avatar-sm mr-3" />
                <div class="media-body">
                    <span class="h6 mb-0">Daniel Cameron</span>
                    <span class="text-muted">Product Designer</span>
                </div>
            </a>
        </li>
        );
    }
}
export default TeacherIcon;