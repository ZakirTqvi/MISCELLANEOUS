const express = require("express");
const app = express();

const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/register', (req, res) => {
    let { username, password } = req.query;
   res.send(`Welcome ${username}: get route`);
});

app.post('/register', (req, res) => {
    let { username, password } = req.body;
    res.send(`Welcome ${username}: post route`);
});

app.get("/ig/:username", (req, res) => {
 let { username } = req.params;
 res.send(`welcome ${username}`);
});

app.listen(port, () => {
    console.log(`server is listening at port no ${port}`);
});

