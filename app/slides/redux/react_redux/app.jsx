import React from 'react';
import { connect } from 'react-redux'

function AppComponent({ accountBalance }) {
    return (
        <div>
            <h3>Current balance: ${accountBalance}</h3>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        accountBalance: state.balance
    }
}

export default connect(mapStateToProps)(AppComponent);
