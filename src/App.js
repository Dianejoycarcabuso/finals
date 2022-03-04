import React, { useState } from "react";
import Loginform from "./components/Loginform.js";
import logo from './aaa.gif';

function App() {
  const adminUser = {
    email:"d.carcabuso@yahoo.com",
    password: "121212go"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="logged-in">
          <img src={logo} className="logo" alt="Logo" />;
          
          <h2>Name: <span>Diane Carcabuso</span></h2>
          <h2>Course & Section: <span>BSIT32-E2</span></h2>
          <h2>Hobbies: <span>Playing Games</span>,<br></br>
          <span>Listening to music</span>,
          <br></br> 
          <span>Watching Series</span></h2>
          
          
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <Loginform Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
