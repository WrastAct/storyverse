import './App.css'
import MainPanel from './components/MainPanel'
import WorkingArea from './components/WorkingArea'

function App() {

  return (
    <div className="App"> 
       <MainPanel />
       <div style={{ height: 800 }}>
        <WorkingArea />
       </div>
    </div>
  )
}

export default App
