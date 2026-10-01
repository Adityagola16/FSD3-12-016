import express from "express";

const app = express();

app.get("/", (req, res) => {
//   res.send("Hello Express");
// res.send("<h1>hello express</h1>");

res.send(`
    <h1>Hello Server</h1>
    <h2>i am responding from express framework </h2>
    <h3>the code is minimal and easy to return </h3>
    `)
});

app.get('/abont' ,(req,res)=>{
    res.send("<h2>abont page </h2>")
});
app.get("/products",(res,req)=>{
    const product ={
        id:1,
        name:"Mobile",
        price:2500,
    };
    res.send(product);
});

// this line must be last line
app.listen(4444, () => console.log("prg1 is running at 4444"));