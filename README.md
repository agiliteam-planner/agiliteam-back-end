### AgiliTeam Back-End

The AgiliTeam back end utilizes Express, Mongoose, and MongoDB to work with the AgiliTeam react app. This server receives requests issued by AgiliTeam and forwards them to MongoDB.

## Integration with the AgiliTeam API

This backend interacts directly with AgiliTeam in several ways. AgiliTeam uses this backend to receive settings, users, and task cards so that it may render them in meaningful ways.

## Running this Back End

If you want to run this server, you must first install the dependencies used in the app. You can fork and clone down the repository, and install nodemon, CORS, dotenv, Mongoose, and Express with the following command:

`npm i cors dotenv mongoose express nodemon`

This will install the necessary dependencies that the back end utilizes to send and receive data from MongoDB.

You will then need connect a Database to the app by create a `.env` file and placing 

`DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.bc5wb.mongodb.net/<appName>?retryWrites=true&w=majority`,

replacing the username and password with your credentials, and replacing the appName with whatever you would like to name the collection.

Finally, the server should be ready to run, which is accomplished by running `nodemon index.js` within the main directory. The app will default to running on `localhost:3000/` or any port you may define within `.env`.
