import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import routes from './Routes/routes.js';
import cors from 'cors';
const app = express();
app.use(cors());

let uri = 'mongodb+srv://cacheincacheout01:p2VDsQxwNUMtZlEQ@softwaredesignproject.lmdwpma.mongodb.net/software_database'; 

//connecting mongoose
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes are here
routes(app);

// start the Express server
app.listen(process.env.PORT || 8080, () => {
  console.log('Express server is listening on port 8080');
});