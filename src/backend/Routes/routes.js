import registerUser from '../controller/RegisterUser.js';
import addNewMessage from '../controller/SendMessageController.js'
import RetrieveUser from '../controller/RetrieveUser.js'

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

    app.route('/loginUser')
    .get((req, res)=>{
        console.log(req.body)
        res.send('Login Successful');
    })
    .post(RetrieveUser)
}


export default Routes;
