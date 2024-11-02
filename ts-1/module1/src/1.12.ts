{
    // nullabel type 
    const searchName = (value:string | null)=>{
        if(value){
          console.log('Searching')  
        }else{
            console.log('Ther is nothing to secrch')
        }
    }

    searchName(null);

    // unknow type

    const getSpreedInMeterPerSecend = (value:unknown)=>{
        if(typeof value === 'number'){
            console.log(`The spreed is  ${value *1000/3600} ms`)
        }
        else if(typeof value === "string"){
           const [result, unit] = value.split(' ');
           const converteSpreed = (parseFloat(result) * 1000)/3600;
           console.log(`The spreed is ${converteSpreed}`)
        }
        else{
           console.log('worng input') 
        }
    }
    getSpreedInMeterPerSecend('1000');

    const throwError = (msg:string): never =>{
        throw new Error(msg);
    }
    throwError('Mushkil se error hogaya');
}