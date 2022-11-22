import './App.css'
import DialogEditor from './components/DialogEditor'
import Authentication from './components/AuthPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App"> 
        {/* <DialogEditor /> */}
        {/* <Authentication /> */}
      </div>
      <Routes>
        <Route path="/login" element={<Authentication />} />
        <Route path="/" element={<DialogEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
