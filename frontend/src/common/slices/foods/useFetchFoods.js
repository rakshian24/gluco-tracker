import { useSelector, useDispatch } from 'react-redux';
import { fetchFoodsInit as fetchFoodsInitAction } from './actions';
import { getFoodsLoading, getFoods, getFoodsError } from './reducer';

function useFetchFoods() {
  const dispatch = useDispatch();
  const fetchFoodsInit = (payload) => dispatch(fetchFoodsInitAction(payload));
  const isFetchFoodsLoading = useSelector(getFoodsLoading);
  const foods = useSelector(getFoods);
  const fetchFoodsError = useSelector(getFoodsError);
  return [
    foods,
    {
      fetchFoodsInit,
      isFetchFoodsLoading,
      fetchFoodsError
    },
  ];
}

export default useFetchFoods;
