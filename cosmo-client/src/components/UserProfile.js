import { useNavigate } from "react-router-dom";

const UserProfile = ({ loginId, setLoginId, userId }) => {
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    setLoginId(0);
    alert("Successfully logged out!")
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default UserProfile;
