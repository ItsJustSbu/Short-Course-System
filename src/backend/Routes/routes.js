import addNewMessage from '../controller/SendMessageController.js'

const Routes = (app) =>{
    app.route('/message')
    .get((req,res)=>{
        res.send('GET request successful');
    })
    .post(addNewMessage)
}

export default Routes;
