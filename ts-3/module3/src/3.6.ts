{
    // getter and setter

    class BankAccount{
        readonly id:number;
        protected name:string;
        private _balance:number;

        constructor(id:number,name:string, balance:number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        get balance():number{
            return this._balance;
        }

        set deposit(amount:number){
            this._balance += amount
        }
        
    }


    const goribManushAccount = new BankAccount(111, "Mr.gorib", 20);
    goribManushAccount.deposit = 10;
    const myBanlce = goribManushAccount.balance;
    console.log(myBanlce)

}