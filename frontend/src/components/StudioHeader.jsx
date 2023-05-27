import { CgProfile} from "react-icons/cg";

function StudioHeader() {
    return(
        <div className="flex items-center justify-center mt-5">
            <CgProfile className="text-[250px]"></CgProfile>

            <div className="ml-11">
                <h1 className="text-6xl font-semibold">Hey, Connel LA Manhica</h1>
                <h2 className="text-2xl font-medium">Let's get creating...</h2>
            </div>
            
        </div>
    )
}

export default StudioHeader