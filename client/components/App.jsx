import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Quiz from './Quiz.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';
import { Context } from './Context.jsx';
import '../app.css'; // imports css to apply to all components in App component
import LeaderBoard from './Leaderboard.jsx';
import Kennel from './Kennel.jsx';
import User from './User.jsx';
import NavBar from './Navbar.jsx';
import Restaurant from './Restaurant.jsx';
import About from './About.jsx';
import DeletedUser from './DeletedUser.jsx';
import Activity from './Activity.jsx';
import GetWellCenter from './GetWellCenter.jsx';
import Map from './Map.jsx'


function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path='/home' element={<Home />} />
            <Route
              path='/leaderBoard'
              element={
                <div>
                  <NavBar />
                  <LeaderBoard />
                </div>
              }
            />
            <Route
              path='/quiz'
              element={
                <div>
                  <NavBar />
                  <Quiz />
                </div>
              }
            />
            <Route
              path='/activity'
              element={
                <div>
                  <NavBar />
                  <Activity />
                </div>
              }
            />
            <Route
              path='/user'
              element={
                <div>
                  <NavBar />
                  <User />
                </div>
              }
            />
            <Route
              path='/kennel'
              element={
                <div>
                  <NavBar />
                  <Kennel />
                </div>
              }
            />
            <Route
              path='/restaurant'
              element={
                <div>
                  <NavBar />
                  <Restaurant />
                </div>
              }
            />
            <Route
              path='/getwellcenter'
              element={
                <div>
                  <NavBar />
                  <GetWellCenter />
                </div>
              }
            />
            <Route
              path='/about'
              element={
                <div>
                  <NavBar />
                  <About />
                </div>
              }
            />
            <Route
              path='/Map'
              element={
                <div>
                  <NavBar />
                  <Map />
                </div>
              }
            />
          </Route>
          <Route path='/' element={<Login />} />
          <Route path='deleted' element={<DeletedUser />} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
