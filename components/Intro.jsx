import styled from "styled-components";

const Title = styled.h1`
   font-size: min(5rem, 10vw);    
   font-weight: normal;
   background-image: linear-gradient(90deg, rgb(85, 159, 255), rgb(91, 58, 255));
   background-clip: text;
   -webkit-background-clip: text;
   -moz-background-clip: text;
   -webkit-text-fill-color: transparent; 
   -moz-text-fill-color: transparent;	
   font-family: "DM Sans Bold";
`;

const Subtitle = styled.h2`
   font-size: min(1.5rem, 3vw);     
   font-weight: normal;
   margin-bottom: 5vh;
`;

export default function Intro() {
  return (
    <>
    	<Title>
        FutbolTabol
			</Title>
      <Subtitle>
        Check the live standing of football leagues around the world!
      </Subtitle>
    </>
  );
}