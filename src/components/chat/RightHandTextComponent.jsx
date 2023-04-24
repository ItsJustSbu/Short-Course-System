import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";

function RightHandTextComponent({text}){
    
    return(
        <div>
            <Stack direction="row" spacing={2} className="float-right">
                <div className="p-[5px] border rounded-md w-fit h-fit border-[#D101F3]">{text}</div>
                <Avatar>S</Avatar>
            </Stack>
        </div>
    );
}

export default RightHandTextComponent;