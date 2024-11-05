{
    // access modifiers

    class BankAccount{
        readonly id:number;
        protected name:string;
        private _balance:number;

        constructor(id:number,name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addBalange(newbalance: number){
            this._balance = newbalance + this._balance;
        }

        getBalance(){
            console.log(`Balance is ${this._balance}`);
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.name
        }
    }

    const goribManushAccount = new BankAccount(111, "Mr.gorib", 20);
    goribManushAccount.addBalange(100);
    goribManushAccount.getBalance()

}