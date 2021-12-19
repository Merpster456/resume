const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
    console.log('Viewer landed!')
})
app.use(express.static("public"));
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Website Launched");
});