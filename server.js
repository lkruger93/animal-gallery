const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

//did the required require things that are required to complete this project

const app = express();
//figured out express. hallelujah!
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v0/gallery',function(request,response){
  response.json(animals);
});
//got the port channel all figured out which is very very important
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  dotenv.config();
  console.log(`listening on port ${PORT}...`);
})