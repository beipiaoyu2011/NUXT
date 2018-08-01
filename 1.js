// exports.hello = '18';

// // console.log(module);
// // console.log(process);

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.once('newListener', (event, listener)=>{
//     console.log(event, listener);    
//     if(event == 'event') {
//         myEmitter.on('event', ()=>{
//             console.log("B");            
//         });
//     }
// });

// myEmitter.on('event', ()=>{
//     console.log('A');    
// });

// myEmitter.emit('event');

// console.log(EventEmitter.listenerCount(myEmitter, 'event'));
// myEmitter.setMaxListeners(12);
// console.log(myEmitter.getMaxListeners());
// console.log(myEmitter.eventNames());

var miniToastr = require('mini-toastr');

const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
};

miniToastr.init({ types: toastTypes });

miniToastr.success({ message: 11 })

