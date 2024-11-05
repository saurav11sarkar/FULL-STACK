{
    // Encapsulation

    class BankAccount {
        readonly id:number;
        name:string;
        protected _balance: number;

        constructor(id:number, name: string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance += amount
        }

        private _getBalance(){
            return this._balance
        }

        getHiddenMethod(){
            return this._getBalance()
        }
    }
    class StudentAccount extends BankAccount{
        test(){
            this.getHiddenMethod()
        }
    }

    const goribManushAccount = new BankAccount(111, "Mr.gorib",20);
    goribManushAccount.addDeposit(20);
    const myBalance = goribManushAccount.getHiddenMethod();
    console.log(myBalance);
}