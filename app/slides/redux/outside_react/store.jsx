import { createStore } from 'redux'
import { DepositAction, WithdrawAction } from './actions'
import balanceReducer from './reducer'

const store = createStore(balanceReducer);

store.subscribe(() => {
    const currentState = store.getState();

    console.log(currentState);
});

store.dispatch(DepositAction(500));
store.dispatch(DepositAction(100));
store.dispatch(WithdrawAction(220));
