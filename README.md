# nodejs-mongodb
  Node express with mongodb configuration.

### Steps to follow:

1.  Need to install the dependencies using command "npm install".

2.  Make an .env file in the root repository and place these two variables.
    DB_CONNECTION = mongodb+srv://<username>:<password>@cluster0-w4ceb.mongodb.net/<dbname>?retryWrites=true&w=majority
    TOKEN_SECRET = <string> it could be anything.

    Replace <username> with the username that you have for the DB and replace <password> for the password you have for that DB. <dbname> represents the database name.

3. Run the server using command "npm start".

