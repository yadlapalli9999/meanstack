const express  =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var apiUser = require('./router/userRouter')
var apiProduct = require('./router/productRouter')
PORT = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/ng7crud", { useNewUrlParser: true ,useFindAndModify: false}).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
app.use('/',apiUser)
app.use('/',apiProduct)


app.listen(PORT,()=>{
    console.log(`server connected ${PORT}`)
})