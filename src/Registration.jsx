import React , {useState} from "react";




export const Registration = (props) =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [fullname,setFullname ] = useState('');
    const [surname, setSurname] = useState('');
    const [passverify, setPassVerify] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
        console.log(pass);
        console.log(passverify);
    }

    return(
        <div className="auth-form-container">
            <h2> Register </h2>
        <form className="registration-form" onSubmit={handleSubmit}>

            <label htmlFor="Name">Name</label>
            <input value={fullname} onChange={(e)=>setFullname(e.target.value)}type="text"placeholder="Names" id="Name" name="Name"  />
            <label htmlFor="Surname">Surname</label>
            <input value={surname} onChange={(e)=>setSurname(e.target.value)}type="text"placeholder="Surname" id="Surname" name="Surname"/>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email"placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="Password">Password</label>
            <input value={pass} onChange={(e)=>setPass(e.target.value)}type="Password"placeholder="************" id="Password" name="Password" />
            <label htmlFor="Password Verification">Password Verification</label>
            <input value={passverify} onChange={(e)=>setPassVerify(e.target.value)}type="Password"placeholder="***********" id="Password Verification" name="Password Verification"/>
            <button type="submit">Register</button>

        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an Account?Login here </button>
        </div>

    )

}