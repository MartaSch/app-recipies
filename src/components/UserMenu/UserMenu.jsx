import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
      <div>
        <p>{user.name}</p>
      </div>
    );
  };