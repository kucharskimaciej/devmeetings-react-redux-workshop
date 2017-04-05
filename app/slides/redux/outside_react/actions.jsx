export function WithdrawAction(amount) {
   return {
       type: 'WITHDRAW',
       amount
   }
}

export function DepositAction(amount) {
    return {
        type: 'DEPOSIT',
        amount
    }
}
