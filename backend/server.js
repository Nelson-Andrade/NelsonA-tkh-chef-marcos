const express = require('express') // Import express
const app = express() //Instantiate a new instance of express

const menu = [
 {
   id: 1,
   dish: "Baked Shrimp Scampi",
   price: 20
 },
 {
   id: 2,
   dish: "Chicken Parmigiana",
   price: 14
 },
 {
   id: 3,
   dish: "Margherita Pizza",
   price: 17
 },
 {
   id: 4,
   dish: "Penne with Vodka Sauce",
   price: 18
 }
]

// Create a new endpoint on the root route
app.get('/', function (request, response) {
  response.send("Welcome to Chef Marco's Italian Bistro!").end()
})

// GET route for "/menu" endpoint that responds with the menu in JSON format
app.get('/menu', function (request, response) {
  response.send(menu).end();
});

// GET route for retrieving a specific menu item by its id
app.get('/menu/:menuItem', function (request, response) {
  const menuItemId = parseInt(request.params.menuItem); // grab menu item ID from URL

  // Find the menu item by ID
  const menuItem = menu.find(item => item.id === menuItemId);

  if (menuItem) {
    response.json(menuItem); // If found, send the menu item as a JSON response
  } else {
    response.status(404).send('Menu item not found'); // If not found, send a 404 error
  }
});

// POST route for reservations 
app.post('/reservations', function (request, response) {
  response.status(501).send("this route exists BUT it’s not implemented just yet");
});

//Tell the express app that you want it to listen on port 8080 of your computer
app.listen(8080, function () {
  //This function gets executed when the app starts listening
  console.log('Server is listening on 8080')
})
