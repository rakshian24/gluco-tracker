import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CheckboxLabel, ErrorText, FormButton, FormFirstRowContainer, FormItem, PageTitle, TextArea } from '../../../../common/styled-components';
import { ROUTES, SELECT_DROP_DOWN_OPTIONS, BUTTON_TYPE } from '../../../../constants';
import SelectDropdown from '../../../../components/SelectDropdown';
import { FormFooterContainer } from '../../../profile/styles';
import LoadingSpinner from '../../../../components/LoadingSpinner';
import { isArrayEmpty, isObjectEmpty, showConsumedFoodsTagBox, showIsMedsTakenCheckbox } from '../../../../utils';
import { useCreateFood, useCreateReading } from '../../../../common/slices';
import MultiSelectBox from '../../../../components/MultiSelectBox';

const defaultFormFields = {
  type: '',
  reading: 0,
  isExercised: false,
  description: ''
};

const CreateGlucoseReading = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});
  const [isMedsTakenCheckBoxValue, setIsMedsTakenCheckBoxValue] = useState(null);
  const [isExercisedCheckBoxValue, setIsExercisedCheckBoxValue] = useState(false);
  const [selectedMultiValue, setSelectedMultiValue] = useState([]);
  const [, setMultiSelectInputVal] = useState('');
  const navigate = useNavigate();

  const [newReading, { createReadingInit, isLoading, createReadingError, resetCreateReading }] = useCreateReading();
  const [newFood, { createFoodInit }] = useCreateFood();

  //On successfull creation of food, appending the selectedMultiValue array with the newly created food
  useEffect(() => {
    if (!isObjectEmpty(newFood)) {
      setSelectedMultiValue([...selectedMultiValue, newFood])
    }
  }, [newFood, setSelectedMultiValue])

  //On successfull creation of reading, navigate the user to dashboard page
  useEffect(() => {
    if (!isObjectEmpty(newReading)) {
      resetCreateReading()
      navigate(ROUTES.DASHBOARD);
    }
  }, [newReading, navigate])

  //To show error messages and toast on submit, in case of error
  useEffect(() => {
    if (createReadingError && typeof (createReadingError) === 'string') {
      toast.error(createReadingError)
    }
    if (createReadingError && !isArrayEmpty(Object.keys(createReadingError))) {
      setFormError(createReadingError)
    }
  }, [createReadingError])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formFields,
      type: selectedValue?.value || '',
      isExercised: isExercisedCheckBoxValue,
      ...(showIsMedsTakenCheckbox(selectedValue?.value) && { isMedsTaken: isMedsTakenCheckBoxValue }),
      consumedFoods: selectedMultiValue.map(foodsObj => foodsObj._id)
    }
    createReadingInit(payload)
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    if (name === 'reading') {
      setFormError({ ...formError, reading: '' });

      // Below regex is for allowing only positive non decimal numbers with null value
      if (!(/^(?!0+(?:\0+)?)\d*(?:\d+)?$/.test(value))) {
        setFormError({ ...formError, reading: 'Special characters are not allowed.' })
        return
      }
    }

    if (name === 'description') {
      setFormError({ ...formError, description: '' })
    }

    setFormFields({ ...formFields, [name]: value });
  };

  const handleOnDropDownSelect = (val) => {
    //To disable the error text, once the dropdown value is selected
    setFormError({ ...formError, type: '' });
    setSelectedValue(val);
  }

  const handleOnMultiSelectInputChange = (value) => {
    setMultiSelectInputVal(value)
  }

  const handleOnMultiSelectChange = (value) => {
    setSelectedMultiValue(value)
  }

  const handleOnCreateFood = (query) => {
    const newFoodObj = { value: query, label: query }
    createFoodInit(newFoodObj);
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div style={{ width: "100%" }}>
      <PageTitle>
        Create Reading
      </PageTitle>
      <form onSubmit={handleSubmit}>
        <FormFirstRowContainer>
          <FormItem id="type">
            <label>Type</label>
            <SelectDropdown
              dropDownOptions={SELECT_DROP_DOWN_OPTIONS}
              selectedValue={selectedValue}
              setSelectedValue={(val) => handleOnDropDownSelect(val)}
              placeholder={<div style={{ fontFamily: 'Roboto' }}>Select type</div>}
            />
            <ErrorText>{formError.type}</ErrorText>
          </FormItem>

          <FormItem id="reading" className='form-input-container'>
            <label>Reading</label>
            <input
              placeholder="Enter your reading"
              name="reading"
              type="number"
              value={formFields.reading}
              onChange={hanldeInputValueChange}
            />
            <ErrorText>{formError.reading}</ErrorText>
          </FormItem>
        </FormFirstRowContainer>

        {/* Showing isMedsTaken checkbox only if user has selected AfterBreakfast or AfterDinner as a type */}
        {showIsMedsTakenCheckbox(selectedValue?.value) && (
          <FormItem id="isMedsTaken">
            <CheckboxLabel>
              <input
                name="isMedsTaken"
                type="checkbox"
                value={isMedsTakenCheckBoxValue}
                onChange={() => setIsMedsTakenCheckBoxValue(!isMedsTakenCheckBoxValue)}
                checked={isMedsTakenCheckBoxValue}
              />
              <span>Did you take your pills?</span>
            </CheckboxLabel>
            <ErrorText>{formError.isMedsTaken}</ErrorText>
          </FormItem>
        )}

        <FormItem id="isExercised">
          <CheckboxLabel>
            <input
              name="isExercised"
              type="checkbox"
              value={isExercisedCheckBoxValue}
              onChange={() => setIsExercisedCheckBoxValue(!isExercisedCheckBoxValue)}
              checked={isExercisedCheckBoxValue}
            />
            <span>Did you exercise?</span>
          </CheckboxLabel>
          <ErrorText>{formError.isExercised}</ErrorText>
        </FormItem>

        {showConsumedFoodsTagBox(selectedValue?.value) && (
          <FormItem id="consumedFoods">
            <label>Foods consumed</label>
            <MultiSelectBox
              selectedMultiValue={selectedMultiValue}
              handleOnMultiSelectInputChange={handleOnMultiSelectInputChange}
              handleOnMultiSelectChange={handleOnMultiSelectChange}
              handleOnCreateFood={handleOnCreateFood}
            />
            <ErrorText>{formError.consumedFoods}</ErrorText>
          </FormItem>
        )}

        <FormItem id="description">
          <label>Description</label>
          <TextArea
            rows={5}
            placeholder="Enter description"
            name="description"
            value={formFields.description}
            onChange={hanldeInputValueChange}
          >
          </TextArea>
          <ErrorText>{formError.description}</ErrorText>
        </FormItem>

        <FormFooterContainer style={{ marginTop: "3rem" }}>
          <Link to="/dashboard">
            <FormButton className="form-button" priority={BUTTON_TYPE.SECONDARY}>
              Cancel
            </FormButton>
          </Link>
          <FormButton className="form-button form-button-right" type="submit">
            Create
          </FormButton>
        </FormFooterContainer>
      </form>
    </div>
  )
}

export default CreateGlucoseReading