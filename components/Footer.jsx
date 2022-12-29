import styled from "styled-components";

const FooterStyle = styled.h3`
   margin-top: 5vh;   
   font-weight: normal;   
   font-size: min(1.5rem, 3vw);    
`;

export default function Footer() {
  return (
    <FooterStyle>
      &copy; Sean Kim 2022. All rights reserved.
    </FooterStyle>
  );
}