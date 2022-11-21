import './App.css'
import MainPanel from './components/MainPanel'
import Authentication from './components/AuthPage'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App"> 
        {/* <MainPanel /> */}
        {/* <Authentication /> */}
      </div>
      <Routes>
        <Route path="/login" element={<Authentication />} />
        <Route path="/" element={<MainPanel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
