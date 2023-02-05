import React from "react"; 
import "../styles/opportunities.css";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { useMutation } from '@apollo/client';
import { ADD_USER, QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

function Opportunities() { 
    const { username: userParam } = useParams();
    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
    });
    
    const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
        return <Navigate to="/opportunities-edit" />;
    }

    return ( 
        <div className="main-cont">
            <div className="opp-block">
                <h1 className="text">{`${user.opportunityOne.title}`}</h1>
                <p className="description">{`${user.opportunityOne.descr}`}</p>
            </div>
            <div className="opp-block">
                <h1 className="text">{`${user.opportunityTwo.title}`}</h1>
                <p className="description">{`${user.opportunityTwo.descr}`}</p>
            </div>
            <div className="opp-block">
                <h1 className="text">{`${user.opportunityThree.title}`}</h1>
                <p className="description">{`${user.opportunityThree.descr}`}</p>
            </div>
        </div>
    ) 
} 
     
export default Opportunities;