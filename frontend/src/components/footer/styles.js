import { styled } from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  padding-top: 1.25rem ;
  min-height: 6.5rem;
  border-top: 1px solid #eee;
  
  .footer-icon-lg{
    width: 3.125rem;
    height: 3.125rem;
  }
`;

export const FooterIcons = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;