import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

//  async function authenticate (e) {
//   e.preventDefault()
//   const response= await fetch('https://fakestoreapi.com/auth/login',{
//     method:'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body:JSON.stringify({
//         username: "mor_2314",
//         password: "83r5^_"
//     })
// })
//   const result= await response.json()
//  return result
// }

function Login() {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function authenticate(e) {
    e.preventDefault();
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    if (result.token) {
      localStorage.setItem("Token", result.token);
      const users = await fetch("https://fakestoreapi.com/users");
      const allUsers = await users.json();
      console.log("manyUsers", allUsers);
      const filteredUsers = allUsers.filter((user) => {
        return user.username === username;
      });
      console.log(filteredUsers[0].id);
      localStorage.setItem("User", filteredUsers[0].id.toString());
      navigate("/products");
    }
    console.log("myToken is" + result.token);
  }

  return (
    <div class="login-box">
      <h2> Log In</h2>
      <form>
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div class="user-box">
          <input
            type="password"
            name=""
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <a href="#" onClick={authenticate}>
          Submit
        </a>
      </form>
    </div>
  );
}

export default Login;
