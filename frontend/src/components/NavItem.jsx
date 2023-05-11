import { Link } from "react-router-dom";
function NavItem({svg,text, link}){

        return(
            <div className="p-[20px] cursor-pointer">
                <Link to={link}><img src={svg} alt={text} className="w-[28px] h-[28px]"/></Link>
                {text !== ''?<p>{text}</p>:''}
            </div>
        );

}

export default NavItem;
