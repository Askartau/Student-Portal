import React, { Component } from 'react';
import photo from "../../assets/img/avatar-male-1.jpg"

class SortBy extends Component {
    render() {
        return(
            <div class="row">
                <div class="col">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <span class="text-muted text-small">Results 1 - 8 of 8</span>
                        </div>
                        <form class="d-flex align-items-center">
                            <span class="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                                <select class="custom-select">
                                    <option value="alpha">Alphabetical</option>
                                    <option value="old-new" selected>Newest</option>
                                    <option value="new-old">Oldest</option>
                                    <option value="status">Status</option>
                                </select>
                        </form>
                      </div>
                </div>
            </div>
        );
    }
}
export default SortBy;