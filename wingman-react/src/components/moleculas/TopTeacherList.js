import React, { Component } from 'react';
import TeacherIcon from './TeacherIcon'
import photo from "../../assets/img/avatar-male-1.jpg"

class TopTeacherList extends Component {
    render() {
        return(
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <div>
                        <span class="h6">Contributors</span>
                    </div>
                    <a href="#">View all &rsaquo;</a>
                </div>
                    <div class="card-body">
                        <ul class="list-unstyled list-spacing-sm">
                            <TeacherIcon/>
                            <TeacherIcon/>
                            <TeacherIcon/>
                            <TeacherIcon/>

                                        

                        </ul>
                </div>
            </div>
        );
    }
}
export default TopTeacherList;