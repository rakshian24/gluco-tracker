import { useSelector, useDispatch } from 'react-redux';
import { createReadingInit as createReadingInitAction } from './actions';
import { getCreateReadingLoading, getNewReading, getCreateReadingError } from './reducer';

function useCreateReading() {
  const dispatch = useDispatch();
  const createReadingInit = (payload) => dispatch(createReadingInitAction(payload));
  const createReadingError = useSelector(getCreateReadingError);
  const isReadingLoading = useSelector(getCreateReadingLoading);
  const newReading = useSelector(getNewReading);
  return [
    newReading,
    {
      createReadingInit,
      isLoading: isReadingLoading,
      createReadingError
    },
  ];
}

export default useCreateReading;
