export function Deposit(amount){
    return {type:'deposit',payload:amount}
}
export function Withdraw(amount){
    return {type:'withdraw',payload:amount}
}
export function Name(name){
    return {type:'name',payload:name}
}