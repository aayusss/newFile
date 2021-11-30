import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

const Home = () => {
  const [newBody, setNewBody] = useState([]);

  const getData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setNewBody(res.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="main">
      <div className="center">
        {newBody.map((value) => {
          return (
            <div className="new_class" key={value.id}>
              <ol>
                <li>userId: {value.userId}</li>
                <li>Title: {value.title}</li>
                <li>Body: {value.body}</li>
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
