import registerUser from '../controller/RegisterUser.js';
import SendMessageController from '../controller/SendMessageController.js';
import RetrieveUser from '../controller/RetrieveUser.js'
import {AddMyCourses, UpdateMyCourses,GetMyCourses} from '../controller/MyCoursesController.js'
import {CreateCourse, UpdateClasses,GetClasses} from '../controller/CoursesController.js'

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

    app.route('/mycourses') // registering 
    .get((req, res)=>{
        res.send('Course Successfully Added');
    })
    .post(AddMyCourses)

    app.route('/Updatemycourses') // enroll in a course 
    .get((req, res)=>{
        res.send('Course Successfully Updated');
    })
    .post(UpdateMyCourses)

    app.route('/Getmycourses')
    .get((req, res)=>{
        res.send('Course Successfully Retrieved');
    })
    .post(GetMyCourses)


    app.route('/createcourse') //create a course from studio
    .get((req, res)=>{
        res.send('Course Successfully Created');
    })
    .post(CreateCourse)

    app.route('/Updateclasses') // add classes to a course from studio
    .get((req, res)=>{
        res.send('Classes Successfully Updated');
    })
    .post(UpdateClasses)

    app.route('/Getclasses')
    .get((req, res)=>{
        res.send('Classes Successfully Retrieved');
    })
    .post(GetClasses)
}


export default Routes;
