import Home from './Home';
import CoursesGrid from './CoursesGrid';

function App() {

  return (
    <div className='grid grid-rows-2'>
    <div>
    <Home />
    </div>
    <div className='items-end'>
    <CoursesGrid />
    </div>
    
    </div>
  )
}

export default App
