const fs = require('fs');

// reading text asyn

fs.readFile('./texts/read.txt','utf-8',(err,data)=>{
    if(err) throw Error("Error Reading text");
    console.log(data);

    // writeing text asynchronly
    fs.writeFile('./texts/read2.txt', data,'utf-8',(err)=>{
        if(err) throw Error("Error writing data")
    })
})