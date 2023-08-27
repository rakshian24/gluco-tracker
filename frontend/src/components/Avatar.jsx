import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '../constants';
import { useWindowSize } from '../hooks/useWindowResize';

const StyledAvatar = styled.div([], props => ({
  display: 'flex',
  borderRadius: '50%',
  background: props.isavataractive === 'true' ? '#4ab9a4' : '#D7D8D9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: props.theme.white,
  fontSize: '1.75rem',
  fontWeight: 600,
  cursor: 'pointer',
  width: '3.125rem',
  height: '3.125rem',

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
  const [screenWidth] = useWindowSize();

  const conditionForAvatarBGColor = () => {
    if(screenWidth < 1023){
      if(pathname === ROUTES.SIGN_OUT){
        return 'true'
      }else{
        return 'false'
      }
    }else{
      return 'true'
    }
  }

  return (
    <StyledAvatar size={size} onClick={handleOnClick} isavataractive={conditionForAvatarBGColor()}>
      {userInfo?.name[0]?.toUpperCase() || 'U'}
    </StyledAvatar>
  )
}

export default Avatar