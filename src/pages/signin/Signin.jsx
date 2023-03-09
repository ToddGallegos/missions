import "./signin.css"

export default function Signin(props) {

  const signIn = async (event) => {
    event.preventDefault();
    
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;

    const reqBody = {
      username: username,
      password: password
    }

    const response = await fetch('http://localhost:5000/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    });
    const data = await response.json();
    console.log(data)
    props.setUser(data.user)
    alert(data.message)
    props.setIsLoggedIn(true);
  }

  return (
    <div className="signinContainer">
      <h1 className="formTitle">LOGIN</h1>
      <form id="signinForm" onSubmit={signIn} autoComplete="off">
        <label htmlFor="username">Username: </label> <br />
        <input className="signinInput" autoFocus="True" type="text" name="username" id="username" />
        <br />
        <label htmlFor="password">Password: </label> <br />
        <input className="signinInput" type="password" name="password" id="password" /> <br />
        <button id="signinSubmit" type="submit">Login</button>
      </form>
    </div>
  )
}
