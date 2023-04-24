import { Avatar } from "@mui/material";
import { Stack } from "@mui/system";


function LeftHandComponent({text}){
    
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