const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');

const routes=require('./app/routes/routes')

//database
const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://sa:password-1@sanjeev.fxwwr.mongodb.net/lab7', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb://127.0.0.1:27017/database',{ useNewUrlParser: true } )
mongoose.connection.on('error', err =>{
    console.log('err: ', err);
    // logError(err);
});

// body-parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

//cors

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE");
    next();

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//export the app
exports=module.exports=app;