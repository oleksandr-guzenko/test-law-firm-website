var myHeaders = new Headers();
myHeaders.append("x-api-key", "As54RURdUca6fJosnn9OYaeud1veOvI9768YLema");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://clemensd.kor-test.com/youtube-donwload/dl?id=UxxajLWwzqY", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
JavaScript - Axios

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://clemensd.kor-test.com/youtube-donwload/dl?id=UxxajLWwzqY',
  headers: { 
    'x-api-key': 'As54RURdUca6fJosnn9OYaeud1veOvI9768YLema'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});