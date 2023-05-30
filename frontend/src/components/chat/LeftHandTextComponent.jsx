import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";


function LeftHandComponent({text}){

    // This component is used to display the text on the left hand side of the chat 
    // The text is passed as props from the chat app
    return(
        <div>
           
            <Stack direction="row" spacing={2}>
                <Avatar>N</Avatar>
                
                <div className="p-[5px] border rounded-md w-fit h-fit border-[#D101F3]">{text}</div>
            </Stack>
        </div>
    );
}

export default LeftHandComponent;