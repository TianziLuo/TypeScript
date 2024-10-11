import Count from './Counter.tsx'
import './App.css'

const App: React.FC = () => {
  return(
    <div>
      <Count initialCount={0} />
    </div>
  )
}

export default App
