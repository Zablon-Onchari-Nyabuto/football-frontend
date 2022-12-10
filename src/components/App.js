import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
 
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
            <Routes>
              <Route path={"/"} element={<Home user={user} />} />
            </Routes>
        ) : (
            <Routes>
              <Route path={'/login'} element={<Login setUser={setUser} />} />
              <Route path={"/signup"} element={<SignUp setUser={setUser} />} />
            </Routes>
        )}
      </main>
    </>
    </BrowserRouter>
  );
}

export default App;
