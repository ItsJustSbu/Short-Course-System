import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import routes from '../backend/Routes/routes.js';
const app = express();

let uri = 'mongodb+srv://cacheincacheout01:p2VDsQxwNUMtZlEQ@softwaredesignproject.lmdwpma.mongodb.net/?retryWrites=true&w=majority/';

//connecting mongoose
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes are here
routes(app);

// start the Express server
app.listen(3000, () => {
  console.log('Express server is listening on port 3000');

});