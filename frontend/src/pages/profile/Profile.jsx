import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import { Heading, ProfileContainer, UpdateFormFooterContainer } from './styles';
import { ErrorText, FormButton, FormItem } from '../../common/styled-components';
import { useUpdateUserDetailsMutation } from '../../slices/userApiSlice';
import { setCredentials } from '../../slices/authSlice';
import LoadingSpinner from '../../components/LoadingSpinner';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [formFields, setFormFields] = useState({ name: userInfo?.name || '', email: userInfo?.email || '' });
  const [formError, setFormError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [updateUserDetails, { isLoading }] = useUpdateUserDetailsMutation();

  const handleValidation = () => {
    let error = {};

    if (!formFields.name) {
      error.name = 'Name is required';
    }
    if (!formFields.email) {
      error.email = 'Email is required';
    }

    return error;
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(handleValidation());
    try {
      const res = await updateUserDetails({ ...formFields }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Profile updated successfully!');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Profile update failed!');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <ProfileContainer>
      <Heading>Edit User Profile</Heading>
      <div>
        <form onSubmit={handleSubmit}>
          <FormItem id="name">
            <label>Name</label>
            <input
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

          <UpdateFormFooterContainer>
            <Link to="/dashboard">
              <FormButton className="form-button" priority='tertiary'>
                Cancel
              </FormButton>
            </Link>
            <FormButton className="form-button" type="submit">
              Update
            </FormButton>
          </UpdateFormFooterContainer>
        </form>
      </div>
    </ProfileContainer>
  )
}

export default Profile