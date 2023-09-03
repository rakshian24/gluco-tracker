import { useSelector, useDispatch } from 'react-redux';
import { createReadingInit as createReadingInitAction, resetCreateReading as resetCreateReadingAction } from './actions';
import { getCreateReadingLoading, getNewReading, getCreateReadingError } from './reducer';

function useCreateReading() {
  const dispatch = useDispatch();
  const createReadingInit = (payload) => dispatch(createReadingInitAction(payload));
  const resetCreateReading = () => dispatch(resetCreateReadingAction());
  const createReadingError = useSelector(getCreateReadingError);
  const isReadingLoading = useSelector(getCreateReadingLoading);
  const newReading = useSelector(getNewReading);
  return [
    newReading,
    {
      createReadingInit,
      isLoading: isReadingLoading,
      createReadingError,
      resetCreateReading
    },
  ];
}

export default useCreateReading;
