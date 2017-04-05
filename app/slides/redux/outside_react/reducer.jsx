export default function balanceReducer(state = { balance: 0 }, action) {
    switch (action.type) {
        case 'DEPOSIT':
            return { balance: state.balance + action.amount };

        case 'WITHDRAW':
            return { balance: state.balance - action.amount };

        default:
            return state;
    }
}

