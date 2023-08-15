import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { ErrorText, FormButton, FormFooterTextContainer, FormHeading, FormItem, StyledLink } from '../common/styled-components';
import { useSignInMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import LoadingSpinner from './LoadingSpinner';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signIn, { isLoading }] = useSignInMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(handleValidation());
    try {
      const res = await signIn({ ...formFields }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/dashboard');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleValidation = () => {
    let error = {};

    if (!formFields.email) {
      error.email = 'Email is required';
    }
    if (!formFields.password) {
      error.password = 'Password is required';
    }

    return error;
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <FormHeading>Sign In</FormHeading>
      <div>
        <form onSubmit={handleSubmit}>
          <FormItem id="email">
            <label>Email</label>
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              value={formFields.email}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.email}</ErrorText>
          </FormItem>

          <FormItem id="password">
            <label>Password</label>
            <input
              placeholder="Enter your password"
              name="password"
              type="password"
              value={formFields.password}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.password}</ErrorText>
          </FormItem>

          <FormFooterTextContainer>
            <p>Don't have an account? <StyledLink to={'/'}>Sign Up</StyledLink></p>
          </FormFooterTextContainer>

          <FormButton className="form-button" type="submit">
            Sign In
          </FormButton>
        </form>
      </div>
    </div>
  )
}

export default SignIn