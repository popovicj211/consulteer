

const express = require('express');
const path = require('path');
const cors = require("cors");
require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//const http = require('http');
const app = express();
bodyParser = require("body-parser");
//app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')));


const hostname = '127.0.0.1';
const port = 3006;

//app.use('/api', proxy({ target: 'http://localhost:3000', changeOrigin: true }))


  const url = process.env.YELP_URL;;
const token = process.env.API_TOKEN;



     app.get('/api/yelp/business/restaurants/limit/:limit/category/:cat?' , (req,res)=>{
     

      let  category = req.params.cat;
      let limit = req.params.limit;

       let categoryParams = category == null ? '' : '&categories='+category;
    
  fetch(`${url}?location=San Jose, CA 95127&term=restaurants&limit=${limit}${categoryParams}`, {
           method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token
        }
    })
    .then((response)=> response.json())
    .then((data)=>   res.status(200).json(data))
     .catch((err)=> {
        console.log(err);
        res.status(500);
     })



 })



 app.get('/', (req,res) => {
    res.send(`<h1>API Running on the port ${port}</h1>`);
  });

  /*
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
    */   

  app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

