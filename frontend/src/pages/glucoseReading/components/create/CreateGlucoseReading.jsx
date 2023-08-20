import React, { useState } from 'react'
import { CheckboxLabel, ErrorText, FormButton, FormContainer, FormItem, PageTitle, TextArea } from '../../../../common/styled-components';
import { SELECT_DROP_DOWN_OPTIONS } from '../../../../constants';
import SelectDropdown from '../../../../components/SelectDropdown';
import { UpdateFormFooterContainer } from '../../../profile/styles';
import { Link } from 'react-router-dom';

const defaultFormFields = {
  type: "",
  reading: "",
  isMedsTaken: "",
  isExercised: "",
  description: ""
};

const CreateGlucoseReading = () => {
  const [selectedValue, setSelectedValue] = useState();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [formError, setFormError] = useState({});
  const [isMedsTakenCheckBox, setIsMedsTakenCheckBox] = useState(false);
  const [isExercisedCheckBox, setIsExercisedCheckBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("RESULT = ", { ...formFields, type: selectedValue?.value || '' })
  }

  const hanldeInputValueChange = (event) => {
    const { name, value } = event.target;
    console.log(`${name} = ${value}`)
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <PageTitle>
        Add Reading
      </PageTitle>
      <form onSubmit={handleSubmit}>
        <FormItem id="type">
          <label>Type</label>
          <SelectDropdown
            dropDownOptions={SELECT_DROP_DOWN_OPTIONS}
            selectedValue={selectedValue}
            setSelectedValue={(val) => setSelectedValue(val)}
            placeholder={<div style={{ fontFamily: 'Roboto' }}>Select type</div>}
          />
          <ErrorText>{formError.name}</ErrorText>
        </FormItem>

        <FormItem id="reading">
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

        <FormItem id="isMedsTaken">
          <CheckboxLabel>
            <input
              name="isMedsTaken"
              type="checkbox"
              value={isMedsTakenCheckBox}
              onChange={() => setIsMedsTakenCheckBox(!isMedsTakenCheckBox)}
              checked={isMedsTakenCheckBox}
            />
            <span>Did you take your pills?</span>
          </CheckboxLabel>
          <ErrorText>{formError.isMedsTaken}</ErrorText>
        </FormItem>

        <FormItem id="isExercised">
          <CheckboxLabel>
            <input
              name="isExercised"
              type="checkbox"
              value={isExercisedCheckBox}
              onChange={() => setIsExercisedCheckBox(!isExercisedCheckBox)}
              checked={isExercisedCheckBox}
            />
            <span>Did you exercise?</span>
          </CheckboxLabel>
          <ErrorText>{formError.isExercised}</ErrorText>
        </FormItem>

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
          <ErrorText>{formError.reading}</ErrorText>
        </FormItem>

        <UpdateFormFooterContainer>
          <Link to="/dashboard">
            <FormButton className="form-button" priority='secondary'>
              Cancel
            </FormButton>
          </Link>
          <FormButton className="form-button" type="submit">
            Create
          </FormButton>
        </UpdateFormFooterContainer>
      </form>
    </div>
  )
}

export default CreateGlucoseReading