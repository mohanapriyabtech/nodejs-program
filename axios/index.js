
const express = require('express')
const axios = require('axios')
const { response, json } = require('express')

const app  = express()
app.use(express.json());

const PORT = process.env.PORT || 3000
const API_KEY = process.env.API_KEY


app.listen(PORT, ()=>{
    console.log(`Server is running onport ${PORT}`)

} )


app.get('/', (req, res )=>{
    res.send("Distance Matrix")
})

app.get('/distance', (req, res )=>{
  
  const origins =req.query.origins;
  const destinations =req.query.destinations;
  process.env.API_KEY="";
  var config = {
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${process.env.API_KEY}`,
    headers: { }
  };
  
 axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data.rows[0].elements[0].distance.text));
  const distance = response.data.rows[0].elements[0].distance.text;
  res.json({status:true,distance:distance});
  // res.send('The distance is', distance);

})
.catch(function (error) {
  console.log(error);
  res.json({status: true,error: error })
});
})
// const axios = require('axios');

// axios.get('http://webcode.me').then(resp => {  // one method

//     console.log(resp.data);

// });

// const axios = require('axios');         // second method

// async function makeGetRequest() {

//   let res = await axios.get('');

//   let data = res.data;
//   console.log(data);
// }

//makeGetRequest();


// const url = require('url');            // third method


// async function makeGetRequest() {

//     let payload = { name: 'John Doe', occupation: 'gardener' };

//     const params = new url.URLSearchParams(payload);

//     let res = await axios.get(`http://httpbin.org/get?${params}`);

//     let data = res.data;
//     console.log(data);
// }

// makeGetRequest();
// const axios = require('axios');
// const fs = require('fs');

// var config = {
//     responseType: 'stream'
// };

// let url = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg';

// async function getImage() {

//     let resp = await axios.get(url, config);
//     resp.data.pipe(fs.createWriteStream('image.jpg'));
// }

//getImage();