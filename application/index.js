
const express = require('express');
const os = require("os");
const fs = require('fs');
const hostname = os.hostname();
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`${process.env.HELLO} \nHost: ${hostname}`);
});

app.get('/secreto', (req, res) => {
    if (parseInt(req.headers.token) === parseInt(process.env.TOKEN)) {
        res.send('exito');
    } else {
        res.status(403).send('Error Token');
    }
    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});