import React, { Component } from 'react';
import TwiceList from '../moleculas/TwiceList';

class Faculty extends Component {
    render() {
        return(
            <>
            <section className="bg-white space-sm pb-4">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <h1 className="h2">Faculty:</h1>
                        </div>
                    </div>
                </div>
            </section>

            <TwiceList />
            </>
        );
    }
}

export default Faculty;