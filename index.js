
const fs= require('fs');
const http= require('http');
const url= require('url');
const replaceTemplate= require('./module/replaceTemplate')


// SERVER
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/templateCard.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  'utf-8'
);


 const data=fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8',)
  const dataObj= JSON.parse(data);


const server=http.createServer((req,res)=>{

  const {pathname,query}= url.parse(req.url,true)

 
if(pathname==='/' || pathname==='/overview'){

  res.writeHead(200,{
    "Content-type":"text/html"
  });
  const cardsHtml= dataObj.map(el=> replaceTemplate(tempCard ,el)).join(' ');
const output= tempOverview.replace('{%PRODUCT_CARD%}',cardsHtml)
res.end(output)

  
} else if(pathname==='/product'){

  res.writeHead(200,{
    "Content-type":"text/html"
  });
  
  const product= dataObj[query.id]// it gives the id or url
const output= replaceTemplate(tempProduct ,product)
res.end(output);

}else if(pathname=== '/api'){f
    res.writeHead(200,{
        'Content-type':'application/json',
        'my-own-header':"In learning phase." })
      console.log(  url.parse(data))
    res.end(data)
    //res.end("Getting api")
    
// Every time we hit the url the file is read and send date to server
// we want to read file once and every time hit api is hit only data is send
// and once we refresh only it can trigger at the begining.
  // data is in json/String format convert it into javascript/array of objects
        // format
  
    }  

else{
res.writeHead(404,{
    "Content-type":"text/html",
    "content-header":"In learning"
})
res.end("<h1>page not found!</h1>")

}
});
const port = 4000;
server.listen(port,'localhost',(err)=>{
    if (err) throw err;
    console.log(`Listing to port ${port}`)
})

