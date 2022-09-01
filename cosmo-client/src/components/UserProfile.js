import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ loginId, setLoginId, userId }) => {
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState({
    id: 0,
    name:"",
    email: "",
    password: "",
    is_admin: ""
  });

   useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/users/${1}`);
        const req = await res.json();
        setCurrUser({
          id: req.id,
          name: req.name,
          email: req.name,
          password: req.name,
          is_admin: req.is_admin
        });
      };

      fetchData().catch(console.error);
   }, []);

   console.log(currUser)
  
  const handleLogOut = () => {
    setLoginId(0);
    alert("Successfully logged out!")
    navigate("/");
  };
  return (
    <div>
      <h1>{currUser.name}'s Profile</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserProfile;
