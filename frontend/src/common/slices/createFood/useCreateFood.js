import { useSelector, useDispatch } from 'react-redux';
import { createFoodInit as createFoodInitAction } from './actions';
import { getCreateFoodLoading, getNewFood, getCreateFoodError } from './reducer';

function useCreateFood() {
  const dispatch = useDispatch();
  const createFoodInit = (payload) => dispatch(createFoodInitAction(payload));
  const createFoodError = useSelector(getCreateFoodError);
  const isCreateFoodLoading = useSelector(getCreateFoodLoading);
  const newFood = useSelector(getNewFood);
  return [
    newFood,
    {
      createFoodInit,
      isLoading: isCreateFoodLoading,
      createFoodError
    },
  ];
}

export default useCreateFood;
