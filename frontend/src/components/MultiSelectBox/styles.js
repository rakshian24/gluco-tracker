import { styled } from "styled-components";
import { MultiSelect } from "react-multi-select-component";

export const StyledMultiBox = styled(MultiSelect)`
  font-family: 'Roboto';
  font-size: 1.65rem;

  .dropdown-container{
    padding: 0.5rem 0rem;
    border-radius: 1rem;
    border: ${({ theme }) => `1px solid ${theme.textBoxBorderColor}`};

    &:focus-within {
      outline: none !important;
      border: ${({ theme }) => `1.5px solid ${theme.textBoxBorderColor}`} !important;
      box-shadow: ${({ theme }) => `${theme.textBoxBorderColor} 0px 0px 0px 0.5px !important`};
    }

    //Style for input box
    .dropdown-heading{
      .dropdown-heading-value{
        span{
          color: ${({ theme }) => theme.blackColor};
        }
      }
    }
  }

  // Styles for dropdown options
  .dropdown-content{
    .panel-content{
      .select-panel{
        .search{

          input{
            background: none;
            border: none;
            box-shadow: none;
            outline: none;
          }
        }
        .options{
          max-height: 210px;

          .select-item{
            .item-renderer{

              display: flex;
              align-items: center;
              padding: 0.5rem 0;

              span{
                color: ${({ theme }) => theme.primaryColor};
                font-weight: normal;
              }
            }
          }
        }
      }
    }
  }
`;