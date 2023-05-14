import registerUser from '../controller/RegisterUser.js';
import SendMessageController from '../controller/SendMessageController.js';
import RetrieveUser from '../controller/RetrieveUser.js'
import {AddMyCourses, UpdateMyCourses,GetMyCourses} from '../controller/MyCoursesController.js'
import {CreateCourse, UpdateClasses,GetClasses} from '../controller/CoursesController.js'
import CreateCourseController from '../controller/CreateCoursesController.js';
import updateChats from '../controller/UpdateChatsController.js';
import findUserController from '../controller/findUserController.js';
import RetrieveChats from '../controller/RetrieveChats.js';

const Routes = (app) =>{

    app.route('/registerUser')
    .get((req, res)=>{
        res.send(req.body);
    })
    .post(registerUser)

    app.route('/loginUser')
    .get((req, res)=>{
        console.log(req.body)
        res.send(res.body);
    })
    .post(RetrieveUser)

    //sends a message to the database
    app.route('/chat')
    .get((req, res)=>{
        res.send(req.body);
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
    .post(GetClasses);

    //Route for adding courses to the database
    app.route('/createCourse')
    .get((req, res)=>{
        res.send(req.body); //returns the request body as a response
    })
    .post(CreateCourseController); //calls the CreateCourseController function

    app.route('/updateChats')
    .get((req, res)=>{
        res.send(req.body);
    }
    )
    .post(updateChats);

    app.route('/finduser')
    .get(findUserController);


    app.route('/retrieveChats')
    .get(RetrieveChats);
}


export default Routes;
