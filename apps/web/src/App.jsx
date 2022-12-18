import './App.css'
import DialogEditor from './components/DialogEditor'
import Authentication from './components/AuthPage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider, RequireAuth } from 'react-auth-kit';

function App() {

  return (
    <AuthProvider
      authType={'cookie'}
      authName={"_auth"}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      <BrowserRouter>
        <div className="App">
          {/* <DialogEditor /> */}
          {/* <Authentication /> */}
        </div>
        <Routes>
          <Route path="/login" element={<Authentication />} />
          <Route
            path="/"
            element={
              <RequireAuth loginPath="/login">
                <DialogEditor />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
