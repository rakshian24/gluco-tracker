import { styled } from "styled-components";

export const ListContainer = styled.fieldset`
  border: none;
  padding: 1.5rem 2.5rem;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.linearGradientColor};
  color: ${({ theme }) => theme.white};
  min-width: 100%;
  cursor: pointer;
  height: auto;

  @media screen and (min-width: 501px){
    width: 48.5%;
    min-width: 48.5%;
  }
`;

export const StyledLegend = styled.legend`
  font-size: 1.75rem;
  margin: auto 1rem;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.linearGradientColor};
  border-radius: 1rem;
  padding: 1rem 2rem;
  font-weight: 500;
`;

export const ListContentContainer = styled.div`
  font-size: 1.65rem;
`;

export const ListItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
`;

export const ListItemCol = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
`;

export const HeaderCell = styled.div`
  font-weight: 400;
  margin-right: 0.75rem;
`;

export const ValueCell = styled.div`
  width: 3rem;
  text-align: center;
`;