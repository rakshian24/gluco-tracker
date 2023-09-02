import { useSelector, useDispatch } from 'react-redux';
import { fetchReadingsInit as fetchReadingsInitAction } from './actions';
import { getReadingsLoading, getReadings, getReadingsError } from './reducer';

function useFetchReadings() {
  const dispatch = useDispatch();
  const fetchReadingsInit = (payload) => dispatch(fetchReadingsInitAction(payload));
  const isFetchReadingsLoading = useSelector(getReadingsLoading);
  const readings = useSelector(getReadings);
  const fetchReadingsError = useSelector(getReadingsError);
  return [
    readings,
    {
      fetchReadingsInit,
      isLoading: isFetchReadingsLoading,
      fetchReadingsError
    },
  ];
}

export default useFetchReadings;
