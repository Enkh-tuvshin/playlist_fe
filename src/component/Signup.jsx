import style from "../styles/Signup.module.css";
import Button from "react-bootstrap/Button";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const Signup = () => {
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        navigate("/Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className={style.main}>
      <div class={style.box}>
        <form
          autocomplete={style.off}
          onSubmit={(e) => {
            onSubmit(e);
          }}
        >
          <h2>Sign Up</h2>
          <div class={style.inputBox}>
            <input type="email" required />
            <span>Username</span>
            <i></i>
          </div>

          <div class={style.inputBox}>
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>

          <div class={style.links}>
            <a>Already have an account</a>
            <Link to="/Login">
              <a>Log in</a>
            </Link>
          </div>
          <Button type="submit" style={{ width: "fit-content" }}>
            Create Account
          </Button>
        </form>
      </div>
      <Button
        style={{
          backgroundColor: "rgb(24, 119, 242)",
          color: "#fff",
          border: "1px solid black",
          borderRadius: "30px",
          cursor: "pointer",
        }}
      >
        <AiFillFacebook />
        Continue With Facebook
      </Button>
      <Button
        style={{
          color: "#808080",
          border: "1px solid black",
          borderRadius: "30px",
          cursor: "pointer",
        }}
      >
        <FcGoogle />
        Contiune With Google
      </Button>
    </div>
  );
};

export default Signup;
