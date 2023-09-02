import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ErrorText, FormButton, FormFooterTextContainer, FormHeading, FormItem, StyledLink } from '../common/styled-components';
import LoadingSpinner from './LoadingSpinner';
import { ROUTES } from '../constants';
import { useAuth, useSignIn } from '../common/slices';
import { isArrayEmpty } from '../utils';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});

  const navigate = useNavigate();
  const [{ isLoading, signInInit, signInError, signInSuccess }] = useSignIn();
  const [userInfo] = useAuth();

  useEffect(() => {
    if (signInError && typeof (signInError) === 'string') {
      toast.error(signInError)
    }
    if (signInError && !isArrayEmpty(Object.keys(signInError))) {
      setFormError(signInError)
    }
  }, [signInError])

  useEffect(() => {
    if (signInSuccess || userInfo) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [navigate, signInSuccess, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    signInInit({ ...formFields });
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