class BankAccount {
    constructor(accountOwner, type, accountNum, balance, fee, interest) {
        this.accountOwner = accountOwner;
        this.type = type;
        this.accountNum = accountNum;
        this.fee = fee;
        this.balance = balance;
        this.interest = interest;

    }

    accountInformation() {
        return `Account owner ${this.accountOwner} has the account type ${this.type},
        with the account number: ${this.accountNum},
        the account racked up a total of R${this.fee} in banking fees,
        currently has a balance of R${this.balance}, 
        this account has an interest rate of ${this.interest} percent
     `
    }
}

let personW = new BankAccount('Warona', 'Savings', 452657852155, 158267, 555, 12);