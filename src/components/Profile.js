import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
