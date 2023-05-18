import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";

function RightHandTextComponent({text}){
    
    return(
        <div>
            // This component is used to display the text on the right hand side of the chat
            <Stack direction="row" spacing={2} className="float-right">
                // The text is passed as props from the chat app
                <div className="p-[5px] border rounded-md w-fit h-fit border-[#D101F3]">{text}</div>
                // The avatar is used to display the user's profile picture
                <Avatar>S</Avatar>
            </Stack>
        </div>
    );
}

export default RightHandTextComponent;