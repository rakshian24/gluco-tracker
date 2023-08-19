import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { ErrorText, FormButton, FormFooterTextContainer, FormHeading, FormItem, StyledLink } from '../common/styled-components';
import { useSignUpMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import LoadingSpinner from './LoadingSpinner';

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const [register, { isLoading, error: { data: { message: errorMessageObject = {} } = {} } = {} }] = useSignUpMutation();

  useEffect(() => {
    if (errorMessageObject && Object.keys(errorMessageObject).length > 0) {
      setFormError(errorMessageObject);
    }
  }, [errorMessageObject])

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await register({ ...formFields }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/dashboard');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <FormHeading>Create an account</FormHeading>
      <div>
        <form onSubmit={handleSubmit}>
          <FormItem id="name">
            <label>Name</label>
            <input
              placeholder="Enter your name"
              name="name"
              type="text"
              value={formFields.name}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.name}</ErrorText>
          </FormItem>

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

          <FormItem id="name">
            <label>Confirm Password</label>
            <input
              placeholder="Confirm your password"
              name="confirmPassword"
              type="password"
              value={formFields.confirmPassword}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.confirmPassword}</ErrorText>
          </FormItem>

          <FormFooterTextContainer>
            <p>Already have an account? <StyledLink to={'/sign-in'}>Sign In</StyledLink></p>
          </FormFooterTextContainer>

          <FormButton className="form-button" type="submit">
            Sign Up
          </FormButton>
        </form>
      </div>
    </div>
  )
}

export default SignUp