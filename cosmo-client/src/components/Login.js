import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginId, setLoginId, setUserId }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/users");
      const req = await res.json();
      setUsers(req);
    };

    fetchData().catch(console.error);
  }, []);

  const validateLogin = (email, password) => {
    // users.forEach((user) => {
    //   if (user.email == email && user.password == password) {
    //     setLoginId(1);
    //     setUserId(user.id)
    //     console.log(user.email, user.password, user.id);
    //     alert(`Successfully logged in: Welcome ${user.name}!`);
    //     navigate("/profile");
    //   }
    // });
    for (let user of users) {
      if (user.email === email && user.password === password) {
        setLoginId(1);
        setUserId(user.id)
        console.log(user.email, user.password, user.id);
        alert(`Successfully logged in: Welcome ${user.name}!`);
        navigate("/");
        break;
      }
      // if (user.email !== email) {
      //   alert('Invalid login!')
      //   break;
      // }
  }
}

  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    validateLogin(email, password);
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div>
      <h1>Log Into Cosmo Center</h1>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
