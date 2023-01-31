import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import UploadBtn from '../components/uploadbtn';
import Auth from '../utils/auth';

const SignUp = () => {
  const [formState, setFormState] = useState({
    displayName: '',
    email: '',
    password: '',
    description: '',
    portfolioLink: '',
    opportunitiesLink: '',
    linkedin:'',
    instagram: '',
    facebook:'',
    twitter:'',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup">
      <h4 className="outer-section">Sign Up</h4>
      <div className="form">
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your full name"
              name="displayName"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="Your email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            <div className="img-div">
              <p>Upload your profile image</p>
              <UploadBtn />
            </div>

            <input
              className="form-input"
              placeholder="Your bio"
              name="description"
              type="text"
              value={formState.description}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="linkedin URL"
              name="linkedin"
              type="text"
              value={formState.linkedin}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="instagram URL"
              name="instagram"
              type="text"
              value={formState.instagram}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="facebook URL"
              name="facebook"
              type="text"
              value={formState.facebook}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="twitter URL"
              name="twitter"
              type="text"
              value={formState.twitter}
              onChange={handleChange}
            />
            <a className="portfolio-link" href="">Create your portfolio</a>
            <a className="opportunities-link"href="">Create your opportunities page</a>
            <button className="submit-btn" style={{ cursor: "pointer" }} type="submit">
              Submit
            </button>
          </form>
        )}

        {error && <div className="error-message">{error.message}</div>}
      </div>
    </div>
  );
};

export default SignUp;
