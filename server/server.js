import express from 'express';
var app = express();
const port = process.env.port || 1001;

app.listen(port, ()=> 
    console.log(`Listening on port ${port}`)
)