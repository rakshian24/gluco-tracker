import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { FooterContainer, FooterIcons } from './styles';
import dashboardLogo from '../../assets/pngs/dashboard.png';
import dashboardActiveLogo from '../../assets/pngs/dashboardActive.png';
import addLogo from '../../assets/pngs/add.png';
import addActiveLogo from '../../assets/pngs/addActive.png';
import listLogo from '../../assets/pngs/list.png';
import listActiveLogo from '../../assets/pngs/listActive.png';
import Avatar from '../Avatar';
import { ROUTES } from '../../constants';
import { isStandAloneAndRunningOnIos16 } from '../../utils';

const { DASHBOARD, CREATE_READING, LIST_READINGS, SIGN_OUT } = ROUTES;

const Footer = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  return (
    <FooterContainer style={{paddingBottom: isStandAloneAndRunningOnIos16() ? '5rem' : '1.25rem'}}>
      <NavLink to={DASHBOARD}>
        <FooterIcons src={pathname === DASHBOARD ? dashboardActiveLogo : dashboardLogo} alt="dashboard" />
      </NavLink>
      <NavLink to={CREATE_READING}>
        <FooterIcons src={pathname === CREATE_READING ? addActiveLogo : addLogo} alt="add" className="footer-icon-lg" />
      </NavLink>
      <NavLink to={LIST_READINGS}>
        <FooterIcons src={pathname === LIST_READINGS ? listActiveLogo : listLogo} alt="list" className="footer-icon-lg" />
      </NavLink>

      <NavLink to={SIGN_OUT}>
        <Avatar userInfo={userInfo} />
      </NavLink>
    </FooterContainer>
  )
}

export default Footer