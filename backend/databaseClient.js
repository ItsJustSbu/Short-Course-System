import express from 'express';
import {MongoClient, ServerApiVersion} from 'mongodb';


//uri for database, 
const uri = "mongodb+srv://cacheincacheout01:p2VDsQxwNUMtZlEQ@softwaredesignproject.lmdwpma.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
        }
    }
);


// app.listen(3000, ()=>{
//     console.log('listening on port 3000');
// });

export default client