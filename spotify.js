// var querystring = require('querystring');
// var axios = require ('axios') 
var client_id = '502f5d0de86046469e08294afdfd0be2'; // Your client id
var client_secret = 'f9487feb64b44130b06edd37e7058536'; // Your secret

// your application requests authorization
// var authOptions = {
// //   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + btoa(client_id) + ':' + btoa(client_secret),
//     'Content-Type': 'application/x-www-form-urlencoded'
// },


//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };
var authenticate = function(event) {
	event.preventDefault();
    console.log('yes');

    axios.post('https://accounts.spotify.com/api/token', {data : {
        grant_type: 'client_credentials'    
    }},
    {
        headers: {
            'Authorization': 'Basic ' + btoa(client_id) + ':' + btoa(client_secret),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true
    })
    .then(function(response) {
        console.log('response :', response)
    })
    .catch(function(error) {
        console.log('error :', error)
    })
}



//   if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/users/jmperezperez',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     axios.get(options, function(error, response, body) {
//       console.log(body);
//     });
// //   }
// });