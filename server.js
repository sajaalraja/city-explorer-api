const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');

app.use(cors()) // after you initialize your express app instance
require('dotenv').config();
 
// a server endpoint 
app.get('/',(req,res)=>{// our endpoint name
  
  res.send('Hello World') 
})
 
app.listen(process.env.PORT ,()=>{
    console.log('starting at port 8000')
   
});