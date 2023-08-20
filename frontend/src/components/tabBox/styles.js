import { styled } from "styled-components";

export const TagWrapper = styled.div`
  display: flex;
  border: ${({ theme }) => `1px solid ${theme.textBoxBorderColor}`};
  border-radius: 1rem;
  flex-wrap: wrap;
  padding: 1rem 1.25rem;
`;

export const TagInput = styled.input`
  outline: none !important;
  border: none !important;
  width: 100%;
  padding-right: 0 !important;
  padding-left: 0.5rem !important;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: inherit;
  margin-top: -0.35rem;
  overflow: hidden;
  line-break: anywhere;
`;