import React, { useState } from "react";
import "../styles/opportunities.css";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_OPP } from "../utils/mutations";
import Auth from "../utils/auth";

function OpportunitiesBuild() {
  // const { username: userParam } = useParams();
  // const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });
  // const user = data?.me || data?.user || {};

  // if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
  //   return <Navigate to="/opportunities" />;
  // }

  // const [formState, setFormState] = useState({
  //   oppOneTitle: "",
  //   oppOneDescr: "",
  //   oppTwoTitle: "",
  //   oppTwoDescr: "",
  //   oppThreeTitle: "",
  //   oppThreeOpp: "",
  // });

  // const [addOpportunities, { error, info }] = useMutation(ADD_OPP);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formState);

  //   try {
  //     const { data } = await addOpportunities({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.addOpportunities.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/opportunities" />;
  }

  const [formState, setFormState] = useState({
    oppOneTitle: "",
    oppOneDescr: "",
    oppTwoTitle: "",
    oppTwoDescr: "",
    oppThreeTitle: "",
    oppThreeOpp: "",
  });

  const [addOpportunities, { error, info }] = useMutation(ADD_OPP);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addOpportunities({
        variables: { ...formState },
      });

      Auth.login(data.addOpportunities.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="form-cont">
      {info ? (
        <p>
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Opportunity One Title"
            name="oppOneTitle"
            type="text"
            value={formState.oppOneTitle}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Opportunity One Description"
            name="oppOneDescr"
            type="text"
            value={formState.oppOneDescr}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Opportunity Two Title"
            name="oppTwoTitle"
            type="text"
            value={formState.oppTwoTitle}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Opportunity Two Description"
            name="oppTwoDescr"
            type="text"
            value={formState.oppTwoDescr}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Opportunity Three Title"
            name="oppThreeTitle"
            type="text"
            value={formState.oppThreeTitle}
            onChange={handleChange}
          />
          <input
            className="form-input"
            placeholder="Opportunity Three Opportunity"
            name="oppThreeOpp"
            type="text"
            value={formState.oppThreeDescr}
            onChange={handleChange}
          />
          <button
            className="submit-btn"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      )}

      {error && <div className="error-message">{error.message}</div>}
    </div>
  );
}

export default OpportunitiesBuild;
