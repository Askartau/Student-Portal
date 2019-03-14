import React, {Component} from 'react'

class Filter extends Component {
    render() {
        return(
            <div className="card-header d-flex bg-secondary justify-content-between align-items-center">
                <div>
                    <h6>Featured Products</h6>
                </div>
                <form className="d-flex align-items-center">
                    <span className="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                    <select className="custom-select">
                        <option value="alpha">Alphabetical</option>
                        <option value="old-new" selected>Newest</option>
                        <option value="new-old">Popular</option>
                        <option value="recent">Recently Updated</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Filter;