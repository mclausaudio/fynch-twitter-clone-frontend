import React from 'react';
import { Link } from 'react-router-dom';
import MessageTimeline from './MessageTimeline'

const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated){
    return (
      <div className="home-hero">
        <h1>Welcome to Fynch</h1>
        <h4>Start sending chirps</h4>
        <div className="btn-toolbar">
          <Link to="/signup" className="btn btn-primary mr-2">
            Sign Up
          </Link>
          <Link to="/signin" className="btn btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div>
      <MessageTimeline profileImageUrl={currentUser.user.profileImageUrl} username={currentUser.user.username}/>
    </div>
  )
}

export default Homepage;
