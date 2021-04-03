const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pdfRoutes = require('./routes/pdfmake')
const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}))

app.use('/pdfMake',pdfRoutes)
app.use('/',(req,res)=>{
 res.sendFile('index.html')
})
app.listen(3002,()=>{
    console.log('Server is up and run')
})