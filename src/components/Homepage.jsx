import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "./Username"
import { getUsernames } from "../api"

const Homepage = () => {
  const [input, setInput] = useState("");
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [validUsernames, setValidUsernames] = useState([]);

  useEffect(() => {
    getUsernames()
    .then(setValidUsernames);
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validUsernames.includes(input)) {
      setUser(input);
      localStorage.setItem("user", input);
      setLoggedIn(true);
      setError(null);
    } else {
      setError("Invalid username");
      setLoggedIn(false);
    }
  };
  console.log("homepage rendered")
    
  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text>Welcome to NC News</Form.Text>
        <br />
        <Form.Label>Log in</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Username"
          onChange={handleChange}
          value={input}
        />
      </Form.Group>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {loggedIn && <h2>Logged in successfully!</h2>}
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
};

export default Homepage;