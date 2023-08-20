import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

import Avatar from '../../components/Avatar';
import { useSignOutMutation } from '../../slices/userApiSlice';
import { clearCredentials } from '../../slices/authSlice';

const SignOutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.p`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 1.2rem;
`;

const UserEmail = styled.p`
  font-size: 1.65rem;
  font-weight: 300;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

const LinkText = styled.p`
  font-size: 1.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryColor};
  cursor: pointer;
`;

const SignOutButton = styled.button`
  margin-top: 3.5rem;
  font-size: 1.85rem;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.secondaryBtnColor};
  color: ${({ theme }) => theme.secondaryBtnTextColor};
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
`;

const SignOut = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut] = useSignOutMutation();

  const handleSignOut = async () => {
    try {
      await signOut().unwrap();
      dispatch(clearCredentials());
      navigate('/sign-in');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <SignOutPageContainer>
      <Avatar size={'lg'} />
      <UserName>{userInfo?.name || 'UserName'}</UserName>
      <UserEmail>{userInfo?.email || 'Email'}</UserEmail>
      <Link to='/profile'>
        <LinkText> Edit Profile</LinkText>
      </Link>
      <SignOutButton onClick={handleSignOut}>
        Sign out
      </SignOutButton>
    </SignOutPageContainer>
  )
}

export default SignOut