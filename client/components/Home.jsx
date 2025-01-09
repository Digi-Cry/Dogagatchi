import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useAuth } from './Context';

function Home() {
  const { user } = useAuth();

  return (
    <div className="home">
      <h1>DOGAGATCHI</h1>
      <img src="https://i.ibb.co/B6bJ359/1699386580-trimmy-sweeticon-removebg-preview-1.png" alt="Dogagatchi Logo" />
      <h1>{`Welcome, ${user?.username}!`}</h1>
      <span>
        <Link to="/user">
          <Button className="boot-button">My Kennel 🦴</Button>
        </Link>
        <Link to="/quiz">
          <Button className="boot-button">Quiz 🤔</Button>
        </Link>
        <Link to="/activity">
          <Button className="boot-button">Activities ✨</Button>
        </Link>
        <Link to="/restaurant">
          <Button className="boot-button">Bone Appetite Cafe 🍽️</Button>
        </Link>
        <Link to="/getwellcenter">
          <Button className="boot-button">Get Well Center 💉</Button>
        </Link>
        <Link to="/leaderboard">
          <Button className="boot-button">Top Dawgs 🏆</Button>
        </Link>
        <Link to="/about">
          <Button className="boot-button">About 📖</Button>
        </Link>
      </span>
    </div>
  );
}

export default Home;
