import style from "../styles/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsSearch,
} from "react-icons/bs";
import { auth } from "../config/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        console.log(user);
        console.log(uid);
        navigate("/");
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }
    });
  }, []);
  return (
    <Container>
      <div className={style.innerContainer}>
        <div className={style.navbarStyle}>
          <div className={style.arrowButton}>
            <BsFillArrowLeftCircleFill />
            <BsFillArrowRightCircleFill />
          </div>
          <div>{user&&user.displayName}</div>
          <div className={style.searchBar}>
            {/* <BsSearch style={{ color: "#fff" }} />   */}
            {/* <input placeholder="  What do you want to listen to?"></input> */}
          </div>
        </div>
        <div className={style.createButton}>
          <Link to="/Signup">
            <button>
              <h3>Sign Up</h3>
            </button>
          </Link>
          <Link to="/Login">
            <button>
              <h3>Log in</h3>
            </button>
          </Link>
          <button
            className={style.logOut}
            onClick={() => {
              signOut(auth)
                .then(() => {
                  console.log("sign out");
                  navigate("/login");
                })
                .catch((error) => {
                  throw new Error(error);
                });
            }}
          >
            <h3>Log out</h3>
          </button>
        </div>
      </div>
    </Container>
  );
};
