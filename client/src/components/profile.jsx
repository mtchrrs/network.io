import React from 'react';
import '../styles/profile.css';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Logo from "../assets/networkio-logo.png"
 
const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
        <div className="profile">

            <div className="main-profile">
                <img src={user.profileImg} className="user-img" alt="User Profile Image"/>
                <h1 className="name">{`${user.displayName}`}</h1>
                <p className="description">{`${user.description}`}</p>
            </div>

            <div className="links">
                <div className="portfolio">
                    <a href={user.portfolioLink}>My Portfolio</a>
                </div>
                <div className="opportunities">
                    <a href={user.opportunitiesLink}>Opportunities to Connect</a>
                </div>
                <div className="socials">
                    <a href={user.linkedin}>Linkedin</a>
                    <a href={user.instagram}>Instagram</a>
                    <a href={user.facebook}>Facebook</a>
                    <a href={user.twitter}>Twitter</a>
                </div>
            </div>

            <div className='logo'>
                <img src={Logo} className="logo" alt="Network.io Logo" />
            </div>
        </div>
    </div>
  );
};

export default Profile;
