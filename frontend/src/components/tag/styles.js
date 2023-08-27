import { styled } from "styled-components";

export const StyledTag = styled.div`
  padding: 1rem 1.25rem;
  font-size: 1.65rem;
  background: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryBtnTextColor};
  border-radius: 2rem;
  font-weight: 400;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  margin: 0.35rem 0;
  margin-right: 1rem;

  .close-icon {
    cursor: pointer;
  }
`;