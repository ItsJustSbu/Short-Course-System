import registerUser from '../controller/RegisterUser.js';
import addNewMessage from '../controller/SendMessageController.js'

const Routes = (app) =>{
    app.route('/message')
    .get((req,res)=>{
        res.send('GET request successful');
    })
    .post(addNewMessage)

    app.route('/registerUser')
    .get((req, res)=>{
        res.send('User Successfully Registered');
    })
    .post(registerUser)
}


export default Routes;
