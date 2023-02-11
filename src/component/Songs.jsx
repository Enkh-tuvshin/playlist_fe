import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../client";

const baseUrl = "http://localhost:8000"

export const Songs = () => {
  const [song, setSong] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const deleteSongs = (props, props1) => {
    client
      .delete("/songs/" + props._id)
      .then((res) => {
        console.log("Deleted", res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const arr = [...song];
    arr.splice(props1, 1);
    setSong(arr);
  };

  useEffect(() => {
    axios
      .get(baseUrl + "/songs")
      .then((response) => {
        setSong(response.data);
        console.log("/songs", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addSong() {
    if (name && description) {
      axios
        .post(baseUrl + "/songs", {
          name: name,
          description: description,
        })
        .then((response) => {
          console.log(response.data);
          const arr = [...song];
          arr.push(response.data);
          setSong(arr);
        });
    } else console.log("something else");
  }

  return (
    <div>
      <input/>
      <input/>
    </div>
  );
};
