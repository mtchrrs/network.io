import React from "react"; 
import "../styles/profile.css";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_USER, QUERY_USER, QUERY_ME } from '../utils/queries';

function ProfileEdit() { 
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    
    const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
        return <Navigate to="/dashboard" />;
    }

    return ( 
        <div className="main-cont-dash">
            <div className="dash-content">
                <h1 className="Dash-title">Welcome back, user full name here</h1>
                <div className="dash-links">
                    <div className="dash-profile">
                        <h2 className="dash-prof-text">Profile</h2>
                        <Link to={`${process.env.PUBLIC_URL}/profile`} element={<Profile />}>See</Link>
                        <Link to={`${process.env.PUBLIC_URL}/profile-edit`} element={<ProfileEdit />}>Edit</Link>
                    </div>
                </div>
            </div>
            
        </div>
    ) 
} 
     
export default ProfileEdit;