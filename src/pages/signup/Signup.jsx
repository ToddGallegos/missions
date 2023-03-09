import "./signup.css";

export default function SignUp() {
    
    const signUp = async (event) => {
        event.preventDefault();
        const username = event.target.elements["username"].value;
        const email = event.target.elements["email"].value;
        const password = event.target.elements["password"].value;
        const confirmPassword = event.target.elements["passwordCheck"].value;

        const reqBody = {
            username: username,
            email: email,
            password: password,
        };

        if (password !== confirmPassword) {
            alert("passwords don't match");
        } else {
            const response = await fetch(
                "http://localhost:5000/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(reqBody),
                }
            );
            const data = await response.json();
            console.log(data);
            alert(data.message);
        }
    };

    return (
        <div className="signUpContainer">
            <h1 className="formTitle">SIGN-UP</h1>
            <form id="signupForm" onSubmit={signUp} autocomplete="off">
                <label htmlFor="username">Username: </label> <br />
                <input className="signupInput"
                    autoFocus="True"
                    type="text"
                    name="username"
                    id="username"
                />
                <br />
                <label htmlFor="email">Email: </label>
                <br />
                <input className="signupInput" type="text" name="email" id="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <br />
                <input className="signupInput" type="password" name="password" id="password" />
                <br />
                <label htmlFor="passwordCheck">Confirm Password: </label>
                <br />
                <input className="signupInput"
                    type="password"
                    name="passwordCheck"
                    id="passwordCheck"
                />{" "}
                <br />
                <button id="signupSubmit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
