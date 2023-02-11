import { Link, useNavigate } from "react-router-dom";
import style from "../styles/Home.module.css";
import { Container, Card, Button } from "react-bootstrap";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "../component/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { useEffect } from "react";

export const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        navigate("/");
      } else {
        // User is signed out
        // ...
        navigate("/login");
      }
    });
  }, []);

  const cards = [
    {
      image: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      names: "Peaceful Piano",
      text: "Relax and indluge with beautiful piano peaces",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5",
      names: "Deep Focus",
      text: "Keep calm and focus with ambient and post-rock music",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025d87659dcadef82dd0e73f56",
      names: "Instrumental Study",
      text: "Focus with soft study music in the background.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025ea54b91b073c2776b966e7b",
      names: "Jazz Vibes",
      text: "The original chill instrumental beats...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025b0a7b8408322a3b9ed15e1e",
      names: "chill lofi study beats",
      text: "The perfect study beats. Find your ficus,crush...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696",
      names: "Coding mode",
      text: "Dedicated to all the programmers out there.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000003e435ce0a86a8b9dc24527618",
      name: "Workday Lounge",
      text: "Lounge and chill out music for your workday.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000396e08a91ef3c7a6e7bfaa9a6",
      name: "Beats to think to",
      text: "Focus with deep techno and tech house.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000020d89156cb29fff2a3fbc237b",
      names: "Today's Top hits",
      text: "Meghan Trainor is on top of the Hottest 50!",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000266a5609d2c44b9fd2dbe4e0f",
      names: "RapCaivar",
      text: "New music from Metro Boomin, Latto and Nas ...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1",
      names: "All out 2010s",
      text: "Lounge and chill out music for your workday.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f000000025e81461d7898c4309ef0e02d",
      names: "Rock Classics",
      text: "Rock legends & epic songs that continue to...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002acd3004c5f914c1a5d59d997",
      names: "Chill Hits",
      text: "Kick back to the best new and recent chill hits",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000002019d8ca89209191491b54da9",
      names: "Viva Latino",
      text: "Today's top Latin hits elevando nuestra music...",
    },
    {
      image: "https://i.scdn.co/image/ab67706f00000003fecb9c578f38ebc8eef432cc",
      names: "Mega Hit Mix",
      text: "Lounge and chill out music for your workday.",
    },
    {
      image: "https://i.scdn.co/image/ab67706f0000000384a725e6f3d69525afd9e1a7",
      names: "All out 80s",
      text: "Meghan Trainor is on top of the Hottest 50!",
    },
  ];

  return (
    <div className={style.header}>
      <h1 style={{ fontSize: "26px", color: "#fff" }}>Focus</h1>
      <div className={style.section}>
        <div>
          {cards.map((card, index) => (
            <div
              style={{
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px 16px",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "60%",
                  borderRadius: "5px",
                }}
                src={card.image}
              />
              <h4 style={{ padding: "10px 0px" }}>{card.names}</h4>
              <p style={{ fontSize: "12px", color: "#808080" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
