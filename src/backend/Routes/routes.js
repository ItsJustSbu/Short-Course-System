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

    app.route('/mycourses')
    .get((req, res)=>{
        res.send('Course Successfully Added');
    })
    .post(AddMyCourses)

    app.route('/Updatemycourses')
    .get((req, res)=>{
        res.send('Course Successfully Updated');
    })
    .post(UpdateMyCourses)


    app.route('/addcourse')
    .get((req, res)=>{
        res.send('Course Successfully Added');
    })
    .post(AddCourse)

    app.route('/Updateclasses')
    .get((req, res)=>{
        res.send('Classes Successfully Updated');
    })
    .post(UpdateClasses)
}


export default Routes;
