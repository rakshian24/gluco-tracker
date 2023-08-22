import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { RiAddCircleFill, RiDashboardFill } from 'react-icons/ri';
import { FaListAlt } from "react-icons/fa";
import { useTheme } from 'styled-components';

import { FooterContainer } from './styles';
import Avatar from '../Avatar';
import { ROUTES } from '../../constants';
import { isStandAloneAndRunningOnIos16 } from '../../utils';

const { DASHBOARD, CREATE_READING, LIST_READINGS, SIGN_OUT } = ROUTES;

const Footer = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  const theme = useTheme();

  return (
    <FooterContainer style={{ paddingBottom: isStandAloneAndRunningOnIos16() ? '3.5rem' : '1.25rem' }}>
      <NavLink to={DASHBOARD}>
        <RiDashboardFill size={30} color={pathname === DASHBOARD ? theme.primaryColor : theme.primaryGrey} />
      </NavLink>
      <NavLink to={CREATE_READING}>
        <RiAddCircleFill size={32} color={pathname === CREATE_READING ? theme.primaryColor : theme.primaryGrey} />
      </NavLink>
      <NavLink to={LIST_READINGS}>
        <FaListAlt size={28} color={pathname === LIST_READINGS ? theme.primaryColor : theme.primaryGrey} />
      </NavLink>
      <NavLink to={SIGN_OUT}>
        <Avatar userInfo={userInfo} />
      </NavLink>
    </FooterContainer>
  )
}

export default Footer