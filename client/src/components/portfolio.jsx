import React from "react"; 
import "../styles/opportunities.css";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_USER, QUERY_USER, QUERY_ME } from '../utils/queries';

function Portfolio() { 
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    
    const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
        return <Navigate to="/portfolio-edit" />;
    }

    return ( 
        <div className="main-cont">
            <div className="opp-block">
            <h1 className="education">Education</h1>
                <h1 className="text">{`${user.educationOne.title}`}</h1>
                <p className="description">{`${user.educationOne.descr}`}</p>
                <h1 className="text">{`${user.educationTwo.title}`}</h1>
                <p className="description">{`${user.educationTwo.descr}`}</p>
            </div>
            <div className="opp-block">
                <h1 className="experience">Experience</h1>
                <h1 className="text">{`${user.experienceOne.title}`}</h1>
                <p className="description">{`${user.experienceOne.descr}`}</p>
                <h1 className="text">{`${user.experienceTwo.title}`}</h1>
                <p className="description">{`${user.experienceTwo.descr}`}</p>
            </div>
            <div className="opp-block">
                <h1 className="skills">Skills</h1>
                <h1 className="text">{`${user.skillOne.title}`}</h1>
                <h1 className="text">{`${user.skillTwo.title}`}</h1>
                <h1 className="text">{`${user.skillThree.title}`}</h1>
            </div>
        </div>
    ) 
} 
     
export default Portfolio;