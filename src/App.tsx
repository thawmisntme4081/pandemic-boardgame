import './App.css'
import Cure from './components/Cure'

const App = () => {
  return (
    <div className="relative">
      <img src="public/map.webp" className="w-[1000px]" />
      <div className="card">
        <div className="content">
          <div className="front">
            <img
              src="src/assets/images/cure-marker-yellow.png"
              className="absolute top-0"
            />
          </div>
          <div className="back">
            <img
              src="src/assets/images/cure-marker-yellow-eradicated.png"
              className="absolute top-0"
            />
          </div>
        </div>
      </div>
      <div className="circle-line">
        <div className="circle">
          <div className="icon-block">
            <img
              src="src/assets/images/infection-rate-marker.png"
              alt="web design icon"
            />
          </div>
        </div>
      </div>
      <Cure color={'red'} />
    </div>
  )
}

export default App
