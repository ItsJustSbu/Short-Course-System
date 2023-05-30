import { Input, Button } from "@material-tailwind/react";
import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.js";
import google from "../assets/icons8-google.svg"
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";




function RegistrationComponent(){
    
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const auth = getAuth(app);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        if(password.length < 6){
            alert("Password must be at least 6 characters");
            return;
        }
        if(name.length < 3){
            alert("Name must be at least 3 characters");
            return;
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/home", { replace: true });
                // ...
        })
        .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
                // ..
            });
        }

        const handleLoginClick = () => {
            navigate("/login", { replace: true });
          };

        const registerWithGoogle = () =>{
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
                console.log(errorCode);
                console.log(errorMessage);
                console.log(email);
                console.log(credential);
            });
        }
    
        return(
            <form className="ml-[120px] mt-[150px] w-80 max-w-screen-lg sm:w-96" onSubmit={e =>handleSubmit(e)}>
                <div className="flex flex-col w-72 gap-6">
                <Input variant="outlined" color="purple" size="lg" label="Name" onChange={e=>setName(e.target.value)} value={name} />
                <Input variant="outlined" color="purple" size="lg" label="email" onChange={e=>setEmail(e.target.value)} value={email}/>
                <Input variant="outlined" color="purple" size="lg" label="password" type="password" onChange={e=>setPassword(e.target.value)} value={password}/>       
                <Input variant="outlined" color="purple" size="lg" label ="confirm password" type="password" onChange={e=>setConfirmPassword(e.target.value)} value={confirmPassword}/>
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
                <Button variant="text" className="flex-1 mt-6" onClick={handleLoginClick}>
                    Already have an account?
                </Button>
    
                {/* sign in with google button */}
                    
                </div>
                <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3 mt-5"
                onClick={registerWithGoogle}
                >
                <img src={google} alt="google" className="h-6 w-6" />
                Continue with Google
                </Button>
                
    
            </form>
        )
    

        
        

    }
    

export default RegistrationComponent;