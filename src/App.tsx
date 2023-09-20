import './App.css'
import Cure from './components/Cure'

const App = () => {
  return (
    <div className="relative">
      <img src="public/map.webp" className="w-[1000px]" />
      <Cure color={'red'} />
    </div>
  )
}

export default App
