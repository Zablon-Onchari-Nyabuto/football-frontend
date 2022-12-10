import React from "react";
// import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/esm/Nav';

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <div>
        <Nav.Link href="/">Home</Nav.Link>
      </div>
      <div>
        {user ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
