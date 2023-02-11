import style from "../styles/Login.module.css";
import { AiFillFacebook, AiFillApple, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const provider = new GoogleAuthProvider();

export const Login = () => {
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);

  // const { login } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const password = formData.get("password");

    signInWithEmailAndPassword(auth, name, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage);
      });
  };

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div className={style.main}>
      <div class={style.box}>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          autocomplete={style.off}
        >
          <h2>Log in</h2>
          <div class={style.inputBox}>
            <input type="email" />
            <span>Email</span>
            <i></i>
          </div>
          <div class={style.inputBox}>
            <div
              className={style.style}
              style={{ display: "flex", flexDirection: "row" }}
            >
              <input type="password" id="myInput" />
              <div>
                <input
                  style={{ width: 10, height: 10 }}
                  type="checkbox"
                  onClick={() => myFunction()}
                />
              </div>
              <span>Password</span>
              <i></i>
            </div>
          </div>
          <div class={style.links}>
            <a>Forgot Password ?</a>
            <Link to="/signup">
              <a>Sign up</a>
            </Link>
          </div>
          <Button type="submit" style={{ width: "100px" }}>
            Log in
          </Button>
        </form>
      </div>
      <div className={style.buttons}>
        <Button style={{ backgroundColor: "blue", color: "white"}}>
          <AiFillFacebook />
          Continue With Facebook
        </Button>
        <Button style={{backgroundColor: "black", color: "white"}}>
          <AiFillApple />
          Continue With Apple
        </Button>
        <Button
          variant="light"
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                  GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                navigate("/");
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GoogleAuthProvider.credentialFromError(error);
                // ...
              });
          }}
        >
          <FcGoogle />
          Contiune With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
