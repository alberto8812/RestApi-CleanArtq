// import http2 from "http2";
// import fs from "fs";

// const server = http2.createSecureServer({
//   key:'',
//   cert:''
// })((req, res) => {
//   console.log(req.url);
//   //  res.writeHead(200,{'content-type':'text/html'});
//   //  res.write('<h1>Hola mundo</h1>')
//   // res.end()

//   // const data={name:'John Doe',age:30, city:'new york'};
//   // res.writeHead(200,{'Content-Type':'application/json'});
//   // res.end(JSON.stringify(data))

//   if (req.url == "/") {
//     const htmlFile = fs.readFileSync("./public/index.html");
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(htmlFile);
//     return
//   } 
//   if ( req.url?.endsWith('.js') ) {
//     res.writeHead(200, { 'Content-Type': 'application/javascript' });
//   } else if( req.url?.endsWith('.css')) {
//     res.writeHead(200, { 'Content-Type': 'text/css' });
//   }

//   const responseContent = fs.readFileSync(`./public${ req.url }`,'utf-8');
//   res.end(responseContent);

// })

// server.listen(3000, () => {
//   console.log(`server roning in port ${8080}`);
// });
