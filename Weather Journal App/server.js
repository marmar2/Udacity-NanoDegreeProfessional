// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port , listening);

function listening(){
    console.log(port);
}

//Route path: /users/:userId/books/:bookId
//Request URL: http://localhost:3000/users/34/books/8989

app.get('/all', sendData);

function sendData (request, response) {
	
  response.send(projectData);
  projectData=[]; // To delete previous entries every click
};


app.post('/add', saveData);

function saveData(request,response){
	
	projectData.Temp = request.body.temp;
	projectData.Date1 = request.body.date1;
	projectData.Feeling = request.body.feeling;
	
    /*Ent = {
		'temp': request.body.temp,
		date1: request.body.date1,
		feeling: request.body.feeling
	}*/
	//Add data to projectData object
	//projectData.push(Ent);
	//console.log(projectData);

}