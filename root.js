const fs= require('fs');
const url= require('url');
const http= require('http');
const path = require('path');





const material= fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf8',(err)=> console.log(err));
const data= JSON.parse(material);
const server=http.createServer((req,res,err)=>{
//     if (err) throw err;
//    // res.end('connection successfull')
    const pathName= req.url;

    if(pathName==="/" || pathName==="/overview"){
        res.end("This is overview page..")
    }
    else if (pathName==="/view" )
    {
       console.log( url.parse(req.url,true))
        res.end("This is view page.")
    } 
    else if (pathName==="/api" )
    {
        res.writeHead(200,{
        'Content-type':'application/json',
        "my-header":"In learning phase"
        })
        res.end(material)
    }
   else{
    res.writeHead(404,{
        "Content-type":"text/html",
        "my-own-header":"Still in learning phase"
    });
     res.end('<h1> Page not found!</h1>')



   }
});



const port=3000;
server.listen(port,()=>{
    console.log(`App listing on port ${port}`)
})