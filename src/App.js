import './App.css';
import UserContext from './contexts/userContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignupPage';
import SignIn from './pages/SigninPage';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
    </div>
  );
}

export default App;
