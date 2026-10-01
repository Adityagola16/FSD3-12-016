import http from "http";
import { getUsersByID,updateUser,deleteUser,getAllUser,addUser } from "./users.js";

const server = http.createServer((req, res) => {

  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getUsers())); 
  }
  
   else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => { 
      body += chunk;
    });
    req.on("end", () => {
      const user = JSON.parse(body);
      const userCreated = addUser(user);
      res.end(JSON.stringify({ msg: "user created", user: userCreated }));
    });
    res.end(JSON.stringify({ msg: "add user" }));
  } else if (req.url === "/api/users/1" && req.method === "GET") {
    const userId = Number(req.url.split("/").pop())
    res.end(JSON.stringify({ msg: `Showing details of user with id ${userId}` }));  


    res.end(JSON.stringify({ msg: "single user with id 1" }));

  } else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(JSON.stringify({ msg: "remove 1" }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => console.log("prg7 is running"));
