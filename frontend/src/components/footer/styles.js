import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  min-height: 6.5rem;
  border-top: 1px solid #eee;
  
  .footer-icon-lg{
    width: 3.75rem;
    height: 3.75rem;
  }
`;

export const FooterIcons = styled.img`
  width: 3rem;
  height: 3rem;
`;