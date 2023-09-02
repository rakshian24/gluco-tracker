import { useSelector, useDispatch } from 'react-redux';
import { clearCredentials as clearCredentialsAction, setCredentials as setCredentialsAction } from './actions';
import { getUserInfo } from './reducer';

function useAuth() {
  const dispatch = useDispatch();
  const setCredentials = (payload) => dispatch(setCredentialsAction(payload));
  const clearCredentials = () => dispatch(clearCredentialsAction());
  const userInfo = useSelector(getUserInfo);
  return [
    userInfo,
    {
      setCredentials,
      clearCredentials
    },
  ];
}

export default useAuth;
