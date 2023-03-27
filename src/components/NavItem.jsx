function NavItem({svg,text}){

        return(
            <div className="p-[20px] cursor-pointer">
                <img src={svg} alt={text} className="w-[28px] h-[28px]"/>
                {text != ''?<p>{text}</p>:''}
            </div>
        );

}

export default NavItem;
