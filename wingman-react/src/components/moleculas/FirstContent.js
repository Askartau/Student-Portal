import React, {Component} from 'react';
import Nav from './Nav';
import Filter from './Filter';
import TopList from './TopList'

class FirstContent extends Component {
    render() {
        return(
            <section>
                <div className="container">
                    <div className="row">
                        <Nav />

                        <div className="col">
                            <div className="card card-sm">
                                <Filter />
                                <ul className="list-group list-group-flush">

                                    <li className="list-group-item">
                                        <TopList />          
                                    </li>

                                    <li className="list-group-item">
                                        <TopList />          
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <TopList />          
                                    </li>
                                    
                                    <li className="list-group-item">
                                        <TopList />          
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FirstContent