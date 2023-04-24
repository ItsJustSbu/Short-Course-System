import registerUser from '../controller/RegisterUser.js';
import SendMessageController from '../controller/SendMessageController.js';
import RetrieveUser from '../controller/RetrieveUser.js'

const Routes = (app) =>{

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

    app.route('/chat')
    .get((req, res)=>{
        res.send('Chat Successful');
    })
    .post(SendMessageController)
}


export default Routes;
