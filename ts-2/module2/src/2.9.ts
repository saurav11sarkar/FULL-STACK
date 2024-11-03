{
    // conditional type
    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false; //conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined 
    : any ; 
    
    type Sheik = {
        bick:string;
        car:string;
        ship:string;
        plane:string;
    }

    type CheckVehicle<T> = T extends keyof Sheik ? true : false;

    type hasShip = CheckVehicle <"plane">
    
}