import { auth } from "../firebase";
import LogOut from "./LogOut";
import SignIn from "./SignIn";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const user = auth.currentUser;
  const userT = useAuthState(auth);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};
export default Navbar;
