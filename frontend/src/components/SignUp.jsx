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

  const [register, { isLoading }] = useSignUpMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(handleValidation());

    const { password, confirmPassword } = formFields;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({ ...formFields }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/dashboard');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const handleValidation = () => {
    let error = {};

    if (!formFields.name) {
      error.name = 'Name is required';
    }
    if (!formFields.email) {
      error.email = 'Email is required';
    }
    if (!formFields.password) {
      error.password = 'Password is required';
    }
    if (!formFields.confirmPassword) {
      error.confirmPassword = 'Confirm password is required';
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