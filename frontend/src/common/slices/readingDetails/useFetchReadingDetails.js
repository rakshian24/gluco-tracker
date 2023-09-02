import { useSelector, useDispatch } from 'react-redux';
import { fetchReadingsDetailsInit as fetchReadingsInitAction } from './actions';
import { getReadingDetailsLoading, getReadingDetails, getReadingDetailsError } from './reducer';

function useFetchReadingDetails() {
  const dispatch = useDispatch();
  const fetchReadingsDetailsInit = (payload) => dispatch(fetchReadingsInitAction(payload));
  const isFetchReadingDetailsLoading = useSelector(getReadingDetailsLoading);
  const readingDetails = useSelector(getReadingDetails);
  const fetchReadingsDetailsError = useSelector(getReadingDetailsError);
  return [
    readingDetails,
    {
      fetchReadingsDetailsInit,
      isLoading: isFetchReadingDetailsLoading,
      fetchReadingsDetailsError
    },
  ];
}

export default useFetchReadingDetails;
