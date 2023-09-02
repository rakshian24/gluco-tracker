import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Logo from './Logo';
import BlueDot from './BlueDot';
import { BUTTON_TYPE, ROUTES, themes, themes_color_map } from '../constants';
import { Button } from '../common/styled-components';
import { useAuth } from '../common/slices';

const { green, violet } = themes;
const { TERTIARY } = BUTTON_TYPE;
const { CREATE_READING } = ROUTES;

const StyledHeader = styled.header`
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: sticky;
`;

const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ThemeSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 1.5rem;
`;

const ThemeSelector = styled.div`
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-left: 1.25rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: ${({ type }) => {
    switch (type) {
      case green:
        return themes_color_map.green;
      case violet:
        return themes_color_map.violet;
      default:
        return themes_color_map.green;
    }
  }};
`;

const Header = () => {
  const [userInfo] = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  // const handleOnThemeSelectorClick = (color) => {
  //   dispatch(setTheme(color))
  // }

  return (
    <StyledHeader>
      <Logo title="Gluco Tracker" />
      <HeaderRightContainer>
        {/* <ThemeSelectorContainer>
          <ThemeSelector type={violet} onClick={() => handleOnThemeSelectorClick(violet)} />
          <ThemeSelector type={green} onClick={() => handleOnThemeSelectorClick(green)} />
        </ThemeSelectorContainer>
        {userInfo && pathname !== CREATE_READING && <Button
          buttontype={TERTIARY}
          onClick={() => navigate(CREATE_READING)}
        >
          Add Reading
        </Button>} */}
        {userInfo && <BlueDot userInfo={userInfo} />}
      </HeaderRightContainer>
    </StyledHeader>
  )
}

export default Header