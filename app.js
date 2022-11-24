// const fs = require('fs');
// const http= require('http');
// const url= require('url');


// // For Files.

// // fs.readFile('./txt/finall.txt','utf-8',(err,data)=>{
// //     if (err) return   console.log("ERROR")
// //     console.log(data)
// // })

// // //  const data=`Hey Myself Deva I am Software Engineer.`
// // // fs.writeFile('./txt/input.txt',data,'utf-8',(err)=>{
// // //     if (err) throw err;
// // //     console.log("Data successfully uploaded.")
// // // })


// //For Servers.
// const port =3000;
// const server=http.createServer((req,res)=>{
// //res.end("Server Created Successfully!")
// //console.log(req.url)
// const pathName= req.url;
// if(pathName==='/' || pathName==='/view'){
// res.end("This is an OVERVIEW")
// } else if(pathName==='/product'){
//     res.end("This is an PRODUCT")
// } else
// {
//     res.writeHead(404,{
//         'Content-type':'text/html',
//         'my-own-header':"Hello Headers."
//     }) // For declare Header we have to specify
//         // object & also the  Header is the piece of
//         // information about the response that we are sending
//         //Type-of-header
//         //1.txt/html 2.JSON 3.cookies 4.Sessions

// res.end('<h1>This not Correct-page!</h1>');
// }

// });
// server.listen(port,'localhost',(err)=>{
//     if (err) return console.log("ERROR")
//     console.log(`Listing to the port ${port}`);
// })





console.log(req.url)



