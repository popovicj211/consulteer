

const express = require('express');
const cors = require("cors");
require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//const http = require('http');
const app = express();
app.use(cors());
app.use(express.json());


const hostname = '127.0.0.1';
const port = 3006;
/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); 
      res.end('Hello World');
  });*/

  //const url = 'https://api.yelp.com/v3/businesses/search?location=San Jose, CA 95127&term=restaurants';
  const url = process.env.YELP_URL;;
const token = process.env.API_TOKEN;

/*
app.get('/yelp/business/restaurants/' , (req,res)=>{
    
        

      fetch(`${url}?location=San Jose, CA 95127&term=restaurants`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ token
            }
        })
        .then((response)=> response.json())
        .then((data)=>  res.status(200).json(data))
         .catch((err)=> console.log(err))
  
     })*/

     app.get('/yelp/business/restaurants/limit/:limit/category/:cat?' , (req,res)=>{
     
      //  let limit = req.query.limit;
      //let queries = url.parse(req.url,true).query 
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


//res.status(200).json(limit);

 })


       

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

