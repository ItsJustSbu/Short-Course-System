import { Input, Button } from "@material-tailwind/react";
import React from "react";




function RegistrationComponent(){
    

    

        

    return(
        <form className="ml-[120px] mt-[150px] w-80 max-w-screen-lg sm:w-96">
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
              >
                Register
            </Button>
            <Button variant="text" className="flex-1 mt-6">Already have an account?</Button>
            </div>
            

        </form>
    )
}

export default RegistrationComponent;