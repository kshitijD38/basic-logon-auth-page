import { useState } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Home from "./components/Home";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [error1, setError1] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassowrd(event.target.value);
  };

  window.localStorage.setItem("Email", "hello@gmail.com");
  window.localStorage.setItem("Password", "hello");

  const handleSubmit = () => {
    if (
      email === window.localStorage.getItem("Email") &&
      password === window.localStorage.getItem("Password")
    ) {
      console.log("verified");
    } else {
      setError1(true);
    }
  };

  console.log(email);
  console.log(password);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Home">
            <Home error1={error1} />
          </Route>
          <Route path="/">
            <Login
              handleEmail={handleEmail}
              handlePassword={handlePassword}
              handleSubmit={handleSubmit}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
