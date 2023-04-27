import { Input, Button } from "@material-tailwind/react";
import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";





function LoginComponent(){

    const navigate = useNavigate();

    // const[loginData, setLoginData] = useState({email:'', password:''});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(()=>{
    //     if(email.length < 2){
    //         console.log('name must be 2 or more charecters');
    //     }
    // },[email]);

    
    const handleSubmit = async (e) =>{
        e.preventDefault();

        const loginData = {email, password};
        console.log(loginData);
        const customConfig = {
            header : {
                "Content-Type": "application/json",
            },
        };
        
        const response = await axios.post('http://localhost:3000/loginUser', loginData, customConfig)
        .then(console.log('success')).catch((err)=>console.log(err));

        if(response.data === null){
            alert('invalid credentials');
        }else{
            
            //This is how you pass data to another page
            navigate('/home', {
                state: {id: response.data._id, name:response.data.name}
            });
        }
        
    }


    return(
        <form className="ml-[250px] mt-[200px] w-80 max-w-screen-lg sm:w-96" onSubmit={e=>handleSubmit(e)}>
            <div className="flex flex-col w-72 gap-6">
            
            <Input variant="outlined" color="purple" size="lg" label="email" value={email} onChange={e =>setEmail(e.target.value)} />
            <Input variant="outlined" color="purple" size="lg" label="password" type="password" value={password} onChange={e =>setPassword(e.target.value)}/> 
                  
            </div>
            <div className="flex w-max"> 

            <Button 
            size="lg"
            variant="outlined"
            color="purple"
             className="ml-[0px] mt-6 flex-1"
             type="submit"
              >
                Login
            </Button>
            <Button variant="text" className="flex-1 mt-6">Dont have an account?</Button>
            </div>
            

        </form>
    )
}

export default LoginComponent;