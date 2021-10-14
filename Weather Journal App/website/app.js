/* Global Variables */
const api = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const key = ',us&appid=4d837ab4cd21b59f9e52a8da9dd90d12';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click',()=>{
	const zip = document.getElementById('zip').value;
	const feelings = document.getElementById('feelings').value;
	getInfo(api+zip+key).then(function(myData){
		
		const temperature = Math.round(myData.main.temp );
		
	postData('/add', {temp: temperature-273, date1: newDate, feeling:feelings});
	
	}).then(function(){
		updateUI();
	});
	
	});


const getInfo = async (url)=>{
	 const response = await fetch(url) //i want to fetch this page from the outer server to get the data from it (fetch has default method : get)
	 try{
		 const myData = await response.json(); //object to store my data from above server in json formate to be sent to my server in post request
		 console.log(myData);
		 
		 return myData;
	 } catch(error) {
		 console.log("error is:"+error);
	 }
 }
 const postData = async ( url = '', data = {})=>{
  
    const response = await fetch(url, {

    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {'Content-Type': 'application/json',},   /// checks that the fetched data is json
    body: JSON.stringify(data), // body data type must match "Content-Type" header //changes data to json        
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("Error: "+ error);
    // appropriately handle the error
    }
}

 const updateUI = async ()=>{
	 const response = await fetch('/all') //i want to fetch this page from the outer server to get the data from it (fetch has default method : get)
	 try{
		 const finalData = await response.json(); //object to store my data from above server in json formate to be sent to my server in post request
		 console.log(finalData);
		 document.getElementById('temp').innerHTML = "Temperature is "+finalData.Temp;
		 document.getElementById('date').innerHTML = "Date is "+finalData.Date1;
		 document.getElementById('content').innerHTML = "I feel "+finalData.Feeling;
		
	 } catch(error) {
      console.log("Error: "+ error);
    // appropriately handle the error
    }
 }
 