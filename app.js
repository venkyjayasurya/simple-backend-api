const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('First Request');
})

app.listen(3000, ()=>{
    console.log("Listening to Port 3000");
});