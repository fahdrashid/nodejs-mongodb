# nodejs-mongodb
  Node express with mongodb configuration.

### Steps to follow:

1.  Need to install the dependencies using command "npm install".

2.  Make an .env file in the root repository and place these two variables.

    DB_CONNECTION = mongodb+srv://"username":"password"@cluster0-w4ceb.mongodb.net/"dbname"?retryWrites=true&w=majority
  
    TOKEN_SECRET = "string" it can be any string.
  
    PORT = 3000

    Replace "username" with the username that you have for the DB and replace "password" for the password you have for that DB. "dbname" represents the database name.
    

3. Run the server using command "npm start".

## Note:
 *  I used the mongodb atlas. If you want to connect with the local database then first you have to run the mongodb server using brew (command "brew services start mongodb-community" for that you must have installed brew and mongodb in your local machine.) or any other technique and after that you can easily make your connection with the localhost:27017 and you can copy the connection string from mongodb compass and paste that in .env file.
