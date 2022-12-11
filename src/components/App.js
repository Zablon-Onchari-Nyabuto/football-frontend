import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Reviews from "./Reviews";

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
        <NavBar />
        <main>
          <Routes>
            <Route exact path={"/reviews"} element={<Reviews user={user} />} />
            <Route exact path="/reviews/:id" element={<Reviews />} />
            <Route exact path={"/login"} element={<Login setUser={setUser} />} />
            <Route exact path={"/signup"} element={<SignUp setUser={setUser} />} />
            <Route path={"/"} element={<Home user={user} />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
