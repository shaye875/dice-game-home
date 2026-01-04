import { BankAccount } from "./BankAccount.js"

export class Bank {
    #balance
    constructor() {
        this.#balance = []
    }
    addAccount(account) {
        this.#balance.push(account)
    }
    transfer(fromName, toName, amount) {
        for (let accountFrom of this.#balance) {
            if (accountFrom.owner.toLowerCase() === fromName.toLowerCase())
                for (let accountTo of this.#balance) {
                    if (accountTo.owner.toLowerCase() === toName.toLowerCase()) {
                        accountFrom.withdraw(amount)
                        accountTo.deposit(amount)
                    }
                }
        }
    }
    showBalances() {
       for(let account of this.#balance){
        console.log(account.owner,account.balance)
       }
    }
}

