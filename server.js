const express = require('express') // require the express package
const weather = require('./dataweather/weather.json') 
const app=express();
const cors=require('cors');
const { query } = require('express');
const  PORT=process.env.PORT;
require('dotenv').config();
app.use(cors());


 
// a server endpoint 
app.get('/',(req,res)=>{res.send('hello')});
app.get('/weather',(req,res)=>{// our endpoint name
  let lat=req.query.lat;
  let lon=req.query.lon;
  let searchQuery=req.query.searchQuery
  console.log(lat);
  console.log(lon);
  console.log(searchQuery);
  let datalist=weather.map((element,index)=>{
    return new ForeCast(element.data[index]);
  })
  
  let  resultdata=()=>{
   let city=weather.find((city,index)=>{
    
     return city.city_name.toLocaleLowerCase()===searchQuery.toLocaleLowerCase()&&city.lat===Number(lat)&&city.lon===Number(lon)
   })
   console.log(city.data)
   return city.data.map(element=>{
    return new ForeCast(element);
   }
    )
  
  }
  res.json(resultdata());

  
  
  
});
  
 
 

class ForeCast{
constructor(dataweatherr){
this.date=dataweatherr.valid_date,
this.description=dataweatherr.weather.description
}}
 
app.listen(process.env.PORT ,()=>{
    console.log('starting at port 8000')
   
});