import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route
              exact path="/"
              element={user ? <Home/> : <Login/>}
            />
            <Route
              path="/login"
              element={!user ? <Home/> : <Login/>}
            />
            <Route
              path="/signup"
              element={!user ? <Home/> : <Signup/>}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
