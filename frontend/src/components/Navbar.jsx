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
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex items-center justify-center '>
          <Search />
          </div>
          <div>
          <ul className="flex items-end justify-end mr-10">
      


              <li>
                  <NavItem svg={home} text={"Home"} link="/home"/>
              </li>

              <li>
                  <NavItem svg={learning} text={"My Learning"} link="/list"/>
              </li>
              <li>
                  <NavItem svg={portfolio} text={"Portfolio"} link="/portfolio"/>
              </li>

              <li>
                  <NavItem svg={studio} text={"Studio"} link="/studio"/>
              </li>
              <li>
              <NavItem svg={profile} link="#"/>
              </li> 
          </ul>
        </div>
      </div>
        
      
    </nav>
  );
}

export default Navbar;