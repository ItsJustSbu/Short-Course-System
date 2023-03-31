import Home from './Home';
import Scroller from './components/Scroller';

function App() {

  return (
    <div className='grid grid-rows-2'>
    <div>
    <Home />
    </div>
    <div className='items-end'>
    <Scroller />
    </div>
    
    </div>
  )
}

export default App
