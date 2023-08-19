import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BUTTON_TYPE, colors } from '../../constants';

const { lightBlueGrey,
  primaryBlue,
  white,
  primaryGreen,
  lightOrange,
  darkOrange,
  lightPrimaryBlue } = colors;

const { ADD, REMOVE } = BUTTON_TYPE;

export const FormHeading = styled.h1`
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 1024px){
    font-size: 3rem;
    margin-bottom: 4rem;
    text-align: center;
  }
`;

export const FormItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-weight: 400;

  input{
    padding: 1.5rem;
    border: 1px solid #8498e2;
    border-radius: 1rem;
    font-size: 1.65rem;

    @media screen and (min-width: 501px){
      font-size: 1.8rem;
    }
    
    &::placeholder {
      color: #273178;
      opacity: 0.5;
      font-size: 1.65rem;
      @media screen and (min-width: 501px){
        font-size: 1.8rem;
      }
    } 
    &:focus {
      outline: none !important;
      border: 1.5px solid #6650ef;
    }

    &[type="checkbox"]{
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
  
  label{
    color: #273178;
    font-size: 1.65rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 501px){
      font-size: 1.8rem;
    }
  }
`;

export const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 1.65rem;
  }
`;

export const ErrorText = styled.span`
  color: #ff4d42;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const FormFooterTextContainer = styled.div`
  font-size: 1.65rem;
  color: #aaa;
  margin-bottom: 2rem;

  @media screen and (min-width: 501px){
    font-size: 1.8rem;
  }
`;

export const FormButton = styled.button`
  background: ${({ priority }) => {
    switch (priority) {
      case 'primary':
        return '#0077c5';
      case 'tertiary':
        return '#e3e5e8';
      default:
        return '#0077c5';
    }
  }};
  border: none;
  letter-spacing: 0.1rem;
  padding: 1.5rem 2rem;
  text-transform: uppercase;
  border-radius: 10rem;
  color: ${({ priority }) => {
    switch (priority) {
      case 'primary':
        return '#fff';
      case 'tertiary':
        return 'black';
      default:
        return '#fff';
    }
  }};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 1s ease;
  font-size: 1.5rem;

  @media screen and (min-width: 1024px){
    padding: 1.5rem 3rem;
    font-size: 1.8rem;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledLink = styled(Link)`
  color: #0077c5;
  font-weight: 500;

  &:hover{
    text-decoration: underline;
  }
`;

export const StyledToastContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    margin-top: 7rem;
    font-size: 1.5rem;

    @media screen and (min-width: 501px){
      margin-top: 6rem;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid ${lightBlueGrey};
  background: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return lightPrimaryBlue;
      case ADD:
        return white;
      case REMOVE:
        return lightOrange;
      default:
        return lightPrimaryBlue;
    }
  }};
  color: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return white;
      case ADD:
        return primaryGreen;
      case REMOVE:
        return white
      default:
        return white
    }
  }};
  font-weight: 700;
  border-radius: 7px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 3px 11px;
  font-size: 16px;

  &:hover{
    background: ${({ buttontype }) => {
    switch (buttontype) {
      case 'primary':
        return primaryBlue;
      case ADD:
        return white;
      case REMOVE:
        return darkOrange;
      default:
        return primaryBlue;
    }
  }};
  }

  &:disabled{
    background-color: #eee;
    opacity: 0.6;
    color: ${primaryGreen}
  }

  @media screen and (min-width: 501px) and (max-width: 1024px){
    font-size: 20px;
  }

  @media screen and (min-width: 1025px){
    padding: 5px 10px;
    font-size: 20px;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 3rem;
  
  @media screen and (min-width: 501px) and (max-width: 1023px){
    font-size: 3rem;
  }

  @media screen and (min-width: 1024px){
    font-size: 4rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #8498e2;
  font-size: 1.65rem;
  font-family: inherit;
  margin-bottom: 1.5rem;

  &:focus {
    outline: none;
    border: 1px solid #8498e2;
  }
`;