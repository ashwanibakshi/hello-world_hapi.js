const Hapi  = require("@hapi/hapi");

//init 
 const server = Hapi.server({
     port : 3000,
     host : 'localhost' 
 })

 //route 
 server.route({
     method: 'get',
     path:'/',
     handler:(reques,h)=>{
       return 'hello world'
     }
 });

 //server start
 server.start();
 console.log('server run at port 3000')