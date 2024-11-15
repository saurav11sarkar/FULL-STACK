const EvebtEmiter = require('events');

const myEmitter = new EvebtEmiter();

// listener
myEmitter.on('birthday', ()=>{
    console.log("Happy Birthday To You");
});

myEmitter.on('birthday', (gift)=>{
    console.log(`I will send a gift ${gift}`);
})

myEmitter.emit("birthday","bick");