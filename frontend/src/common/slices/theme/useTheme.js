import { useSelector, useDispatch } from 'react-redux';
import { setTheme as setThemeAction } from './actions';
import { getTheme } from './reducer';

function useTheme() {
  const dispatch = useDispatch();
  const setTheme = (payload) => dispatch(setThemeAction(payload));
  const theme = useSelector(getTheme);
  return [
    theme,
    {
      setTheme
    },
  ];
}

export default useTheme;
