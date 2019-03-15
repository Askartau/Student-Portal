import React, { Component } from 'react';
import AccountHeader from '../moleculas/AccountHeader';
import TwiceListAcc from '../moleculas/TwiceListAcc';

class Account extends Component {
    render() {
        return(
            <>
            <AccountHeader />
            <TwiceListAcc />
            </>
        );
    }
}

export default Account;