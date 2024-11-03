{
    // type assertion
    let anything: any;
    anything = "Next Level Web development";
    anything = 222;
    (anything as number)

    const khToGm = (value: string | number):string|number|undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `the converted value is : ${convertedValue}`;
        } else if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = khToGm(1000) as number;
    const result2 = khToGm('1000') as string;
    console.log(result2)


    type CustomeError ={
        message:string;
    }
    try {
        
    } catch (error) {
       console.log((error as CustomeError).message) 
    }
}