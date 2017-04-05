import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DepositAction, WithdrawAction } from './actions'

class AppComponent extends Component {

    onDeposit = () => {
        this.props.dispatch(DepositAction(100))
    }

    onWithdraw = () => {
        this.props.dispatch(WithdrawAction(100))
    }

    render() {
        <div>
            <h3>
                Current balance: ${this.props.accountBalance}
                <button onClick={this.onDeposit}>+</button>
                <button onClick={this.onWithdraw}>-</button>
            </h3>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        accountBalance: state.balance
    }
}

export default connect(mapStateToProps)(AppComponent);
