import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { user, logout } = useAuth(); // Access the user and login function

  const handelLogout = async () => {
    try {
      await logout(); // Handle Firebase login
      // navigate("/"); // Redirect to homepage after successful login
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Frontend</a>
        </div>
        <div className="flex-1">
          <NavLinks />
        </div>

        <div className="flex-none">
          
          {!user ? (
            <Link to="/login">
              <button className="btn btn-outline btn-sm btn-accent">
                Login
              </button>
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL && user.photoURL !== "nourl"
                        ? user.photoURL
                        : "https://placehold.co/200x200?text=P"
                    }
                  />

                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-52 p-2 shadow"
              >
                <li className="p-2 font-bold">{user.displayName}</li>
                <li>
                  <button
                    onClick={handelLogout}
                    className="btn btn-outline btn-sm btn-accent ml-2"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
