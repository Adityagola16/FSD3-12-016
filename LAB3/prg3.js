import http from 'http'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})
    res.end("<h2>Hello Server</h2>");
    insole.log("Server hit");
});

server.listen(5555,()=>console.log("Server is running...")); 