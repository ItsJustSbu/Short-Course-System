import client from './databaseClient.js';


//how to use the database client
async function run(){
    try{
        await client.connect();
        const database = client.db('sample_analytics');
        const customers = database.collection('customers');
        const customer = await customers.findOne({username:"fmiller"});
        console.log(customer);


    }
    catch(e){
        console.error(e);
    } finally{
        client.close();
    }
}

run();