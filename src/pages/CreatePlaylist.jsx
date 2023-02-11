import axios from "axios";
import style from "../styles/CreatePlaylist.module.css";
import { Link } from "react-router-dom";
import { FcFullTrash } from "react-icons/fc";
import { useEffect, useState } from "react";
import { client } from "../client/index.js";
import "react-bootstrap";

const baseUrl = "http://localhost:8000";

export const CreatePlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const deletePlaylist = (props, props1) => {
    client
      .delete("/playlists/" + props._id)
      .then((res) => {
        console.log("Deleted", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const arr = [...playlist];
    arr.splice(props1, 1);
    setPlaylist(arr);
  };

  useEffect(() => {
    axios
      .get(baseUrl + "/playlists")
      .then((response) => {
        setPlaylist(response.data);
        console.log("/playlist", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addPlaylist() {
    if (name && description) {
      axios
        .post(baseUrl + "/playlists", {
          name: name,
          description: description,
        })
        .then((response) => {
          console.log(response.data);
          const arr = [...playlist];
          arr.push(response.data);
          setPlaylist(arr);
        });
    } else console.log("something else");
  }

  return (
    <div className={style.createPlaylist}>
      <div className={style.row}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={() => addPlaylist()}>Add</button>
      </div>
      {playlist &&
        playlist.map((playlist, index) => {
          return (
            <div
              className={style.card}
              onClick={() => {
                deletePlaylist(playlist, index);
              }}
            >
              <div className={style.cardStyle}>
                <Link to="/song">
                  <h3>{playlist.name}</h3>
                  <p>{playlist.description}</p>
                </Link>
                <button style={{ pointerEvents: "none" }}>
                  <div style={{ width: "max-content", height: "fit-content" }}>
                    <FcFullTrash style={{ width: 35, height: 35 }} />
                  </div>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};
