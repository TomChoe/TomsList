# TomsList

## A website for posting personal for sale ads

A full CRUD app that allows users to post, edit, and delete for-sale ads.  There will be categories in which the user can choose to that corresponds to the item they are selling.  Ads will feature a title, price, and a small map that shows the general vicinity the item is located along with several pictures if the user chooses to do so.  The app will require all users to sign in or register.

  * users will be able to create or delete accounts
  * users can make, edit, or delete individual posts in specific categories
  * users can email other users to inquire about item
  * users can post pictures and will be able to input zipcode to tag a location
  
## Technologies

The server will be built using node/express using the MVC model.  Data will be handled via sql between app and database with the EJS node module handling the front end rendering of the information.  Module 'morgan' will be brought in order to see realtime events occurring within the server along with 'body-parser' and 'method-override' to handle incoming information from forms and input fields.  Another crucial module will be 'pg-promise', it will allow the server to handle query requests and results.  Google maps api will be brought in order to determine location.  User will only have to input zipcode in order to get the data for the general vicinity. Bootstrap/css will handle the design aspect of the app and in structuring the layout and navigation bars.  

## Wireframes / Database

Please see attached images folder *

## Pending

In addition if time allows, a blog feature could be added for each user.

## Instructions on testing in local environment

If you like to test server on your local machine, clone or fork this repo and run the schema.sql file located in the db folder.  This will setup your local database.  A few example users will be in there along with their data.  Port can be setup to the users choosing.

## Links to deployed site and video

https://www.youtube.com/watch?v=UHmbAorCAKc

https://projecttomslist.herokuapp.com/
