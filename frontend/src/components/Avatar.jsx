import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '../constants';

const StyledAvatar = styled.div([], props => ({
  display: 'flex',
  borderRadius: '50%',
  background: props.isavataractive === 'true' ? '#4ab9a4' : '#D7D8D9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#ffffff',
  fontSize: '1.75rem',
  fontWeight: 600,
  cursor: 'pointer',
  width: '3.75rem',
  height: '3.75rem',

  ...(props.size && props.size === 'md' && {
    width: '3.75rem',
    height: '3.75rem'
  }),

  ...(props.size && props.size === 'lg' && {
    width: '7rem',
    height: '7rem',
    fontSize: '3rem',
    fontWeight: 500,
  })
}));

const Avatar = ({ size, handleOnClick }) => {
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <StyledAvatar size={size} onClick={handleOnClick} isavataractive={pathname === ROUTES.SIGN_OUT ? 'true' : 'false'}>
      {userInfo?.name[0]?.toUpperCase() || 'U'}
    </StyledAvatar>
  )
}

export default Avatar