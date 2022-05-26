const redis = require('redis');
const client = redis.createClient();
const axios = require('axios');
const express = require('express');

const app = express();
const USERS_API = 'https://jsonplaceholder.typicode.com/users/';

app.get('/users', (req, res) => {

  try {
    axios.get(`${USERS_API}`).then(function (response) {
      const users = response.data;
      console.log('Users retrieved from the API');
      res.status(200).send(users);
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});


// app.put('/update', (req, response) => {

//   async function makePostRequest() {


//     await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     name:"raju"
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
  
//   })
   
//   .then((res) => console.log(res))
// }

  
// makePostRequest(); 
// });

app.get('/cachedusers', (req, res) => {

  try {
    client.get('users', (err, data) => {

      if (err) {
        console.error(err);
        throw err;
      }

      if (data) {
        console.log('Users retrieved from Redis');
        res.status(200).send(JSON.parse(data));
      } else {
        axios.get(`${USERS_API}`).then(function (response) {
          const users = response.data;
          client.setex('users', 600, JSON.stringify(users));
          console.log('Users retrieved from the API');
          res.status(200).send(users);
        });
      }
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});