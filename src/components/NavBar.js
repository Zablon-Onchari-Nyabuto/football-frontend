import React from "react";
// import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/esm/Nav';
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  function handleLogoutClick() {
    
    fetch("http://127.0.0.1:3000/logout", { method: "DELETE" }).then((r) => {
      console.log(r)
      if (r.status == 204) {
        localStorage.clear()
        navigate("/login")
      }
    });
  }

  return (
    <header>
      <div>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/reviews">Reviews</Nav.Link>
      </div>
      <div>
        {localStorage.getItem("loggedIn") ? (
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