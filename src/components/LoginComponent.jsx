import { Input, Button } from "@material-tailwind/react";
import React from "react";




function LoginComponent(){

    return(
        <form className="ml-[250px] mt-[200px] w-80 max-w-screen-lg sm:w-96">
            <div className="flex flex-col w-72 gap-6">
            
            <Input variant="outlined" color="purple" size="lg" label="email" />
            <Input variant="outlined" color="purple" size="lg" label="password" type="password"/> 
                  
            </div>
            <div className="flex w-max">

            <Button 
            size="lg"
            variant="outlined"
            color="purple"
             className="ml-[0px] mt-6 flex-1"
              >
                Login
            </Button>
            <Button variant="text" className="flex-1 mt-6">Dont have an account?</Button>
            </div>
            

        </form>
    )
}

export default LoginComponent;