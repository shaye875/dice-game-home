export class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount){
        this.balance+=amount
    }
    withdraw(amount){
        if(this.balance-amount<0){
            throw new Error("not many inagth")
        }
        this.balance-=amount
    }
}