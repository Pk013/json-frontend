const express = require("express");
const path = require("path");

const app = express();
const publicFolderPath = path.join(__dirname, "public");

const port = 3000;

app.use(express.json());
app.use(express.static(publicFolderPath));

const users = [];

app.post("/api/user", (request, response) => {
    console.log(request.body);
    if(users.find(user => user.username === request.body.username)) {
        response.status(409).send({error: "User already exists"});
    } else {
        request.body.userIdNumber = Math.floor(Math.random() * 333666999);
        users.push(request.body);
        response.status(201).send(request.body);
    }
})
console.log(users)
app.listen(port, console.log(`Listening on port ${port}`));