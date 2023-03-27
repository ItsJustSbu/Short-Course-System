
import home from '../assets/icons8-home-page.svg'
import learning from '../assets/icons8-e-learning.svg'
import portfolio from '../assets/icons8-bookmark.svg'
import studio from '../assets/icons8-video-camera.svg'
import profile from '../assets/icons8-cat-profile.svg'
import NavItem from "./NavItem";
import Search from "./Search";


function Navbar() {
  return (
    <nav>
        
        

      <ul className="flex items-end justify-end mr-10">
      <Search />


            <li>
                <NavItem svg={home} text={"Home"}/>
            </li>

            <li>
                <NavItem svg={learning} text={"learning"}/>
            </li>
            <li>
                <NavItem svg={portfolio} text={"portfolio"}/>
            </li>

            <li>
                <NavItem svg={studio} text={"studio"}/>
            </li>
             <li>
                <NavItem svg={profile} />
            </li> 
      </ul>
      
    </nav>
  );
}

export default Navbar;