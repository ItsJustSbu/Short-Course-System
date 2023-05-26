import { Input, Button } from "@material-tailwind/react";
import {React, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.js";
import google from "../assets/icons8-google.svg"
import {getAuth, signInWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithPopup, GoogleAuthProvider} from "firebase/auth";





function LoginComponent(){

    const navigate = useNavigate();


    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);


    const SignInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user);
            navigate("/home", { replace: true });
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            alert(`${errorMessage} with error code ${errorCode}`);
            
        })
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Checks if a user exists
        fetchSignInMethodsForEmail(auth, email).then((signInMethods)=>{
            if (signInMethods.length === 0){
                alert('User does not exist');
                navigate("/register", { replace: true });
            }
        })

        //Signs in a user that does exist
        signInWithEmailAndPassword(auth, email,password).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            navigate("/home", { replace: true });

        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`${errorMessage} with error code ${errorCode}`)
        })            
            // ...
        
    };


    const handleRegisterClick = () => {
        navigate("/register", { replace: true });
      };


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
            
            <Button variant="text" className="flex-1 mt-6" onClick={handleRegisterClick}>
                Dont have an account
            </Button>

            {/* google sign in button */}
            
            </div>

            <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3 mt-5"
            onClick={SignInWithGoogle}
            >
            <img src={google} alt="metamask" className="h-6 w-6" />
            Continue with Google
            </Button>
            

        </form>
    )
}

export default LoginComponent;