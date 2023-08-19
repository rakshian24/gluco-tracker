import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { FooterContainer, FooterIcons } from './styles';
import dashboardLogo from '../../assets/pngs/dashboard.png';
import addLogo from '../../assets/pngs/add.png';
import listLogo from '../../assets/pngs/list.png';
import BlueDot from '../BlueDot';

const Footer = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <FooterContainer>
      <FooterIcons src={dashboardLogo} alt="dashboard" />
      <FooterIcons src={addLogo} alt="add" className='footer-add-icon' onClick={() => navigate('/reading/create')} />
      <FooterIcons src={listLogo} alt="list" />
      {userInfo && <BlueDot userInfo={userInfo}/>}
    </FooterContainer>
  )
}

export default Footer