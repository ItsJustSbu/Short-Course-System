import { Input, Button } from "@material-tailwind/react";
import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";




function RegistrationComponent(){
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const registrationData = {name, email, password};
        const customConfig = {
            header : {
                "Content-Type": "application/json",
            },
        };

        const response = await axios.post('http://localhost:3000/registerUser', registrationData, customConfig)
        .then(console.log('success')).catch((err)=>console.log(err));


    }

    return(
        <form className="ml-[120px] mt-[150px] w-80 max-w-screen-lg sm:w-96" onSubmit={e =>handleSubmit(e)}>
            <div className="flex flex-col w-72 gap-6">
            <Input variant="outlined" color="purple" size="lg" label="Name" />
            <Input variant="outlined" color="purple" size="lg" label="email" />
            <Input variant="outlined" color="purple" size="lg" label="password" type="password"/> 
                  
            <Input variant="outlined" color="purple" size="lg" label ="confirm password" type="password"
             />
            </div>
            <div className="flex w-max">

            <Button 
            size="lg"
            variant="outlined"
            color="purple"
             className="ml-[0px] mt-6 flex-1"
             type="submit"
              >
                Register
            </Button>
            <Button variant="text" className="flex-1 mt-6">Already have an account?</Button>
            </div>
            

        </form>
    )
}

export default RegistrationComponent;