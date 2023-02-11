import { Container } from "react-bootstrap";
import { ImHome } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { MdLibraryMusic } from "react-icons/md";
import { SiDigikeyelectronics } from "react-icons/si";
import { BsPlusSquare } from "react-icons/bs";
import { BiHeartSquare } from "react-icons/bi";
import style from "../styles/LeftBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export const LeftBar = () => {
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
    <div className={style.section}>
      <Container>
        <div className={style.cost}>
          <div>
            <Link to="/">
              <p style={{ color: "white", fontSize: "27px" }}>
                <SiDigikeyelectronics /> EyeCloud¶
              </p>
            </Link>
          </div>
          {/* a */}
          <Link to="/">
            <h4 style={{ cursor: "pointer" }}>
              <ImHome />
              Home
            </h4>
          </Link>
          <Link to="/search">
            <h4 style={{ cursor: "pointer" }}>
              <BsSearch />
              Search
            </h4>
          </Link>

          <h4 style={{ cursor: "pointer" }}>
            <MdLibraryMusic /> Your Library{" "}
          </h4>

          {/* b */}

          <div style={{ height: "10px" }}></div>

          {/* c */}

          <Link to="/playlist">
            <h4 style={{ cursor: "pointer" }}>
              <BsPlusSquare /> Create Playlist{" "}
            </h4>
          </Link>
          <Link to="/collection/tracks">
            <h4 style={{ cursor: "pointer" }}>
              <BiHeartSquare /> Liked Songs{" "}
            </h4>
          </Link>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <a
              style={{ color: "#808080" }}
              href="https://www.spotify.com/mn/download/mac/"
            >
              Install app
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
