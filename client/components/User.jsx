import React, { useState, useEffect } from "react";
import NavBar from "./Navbar.jsx";
import Achievements from "./Achievements.jsx";
import Kennel from "./Kennel.jsx";
import Pantry from "./Pantry.jsx";
import DogShop from "./DogShop.jsx";
import axios from "axios";

function User(props) {
  const [user, setUser] = useState("");
  const [globalRank, setGlobalRank] = useState(0);
  const [dogCount, setDogCount] = useState(0);
  const [coins, setCoins] = useState(0);
  const [correctQuestionCount, setCorrectQuestionCount] = useState(0);

  useEffect(() => {
    const userObj = JSON.parse(sessionStorage.getItem("user"));
    axios
      .get("/user/leaderboard/smartest")
      .then(({ data }) => {
        const index = data.findIndex(
          (userData) => userData._id === userObj._id
        );
        setGlobalRank(index + 1);
      })
      .catch((err) => console.error("getLeaders ERROR (client):", err));

    axios.get(`/user/${userObj._id}`).then((user) => {
      setCorrectQuestionCount(user.data[0].questionCount);
      setDogCount(user.data[0].dogCount);
      setCoins(user.data[0].coinCount);
    });
  }, []);

  return (
    <div>
      <div className="user-main-div">
        <div className="user-stats-container">
          <div className="user-stats">
            <h3>Stats</h3>
            <div>Coins: {coins}</div>

            <div>Global Rank: #{globalRank}</div>

            <div>Correct Answers: {correctQuestionCount}</div>

            <div># of Dogs: {dogCount}</div>
          </div>
        </div>
        <div className="dogs">
          <DogShop />
          <Kennel className="user-kennel" />
        </div>
        <Achievements
          user={user}
          className="user-achievements"
        />
      </div>
      <div className="pantry">
        <Pantry />
      </div>
    </div>
  );
}

export default User;
