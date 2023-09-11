 function Login() {
    return (
        <div class="login-box">
        <h2> Log In</h2>
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div class="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            
            Submit
          </a>
        </form>
      </div>
    )
}

export default Login