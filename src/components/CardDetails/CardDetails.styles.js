import styled from "styled-components";


export const ContentDetails = styled.div`
border: 2px solid #0b5ed7;
border-radius: 10px;
padding: 100px;
cursor: pointer;
position: absolute;
justify-content: center;

`

export const ImageDetails = styled.img`
border-radius: 10px 10px 0 0;


` 

export const GenderDetails = styled.div`
color: black;
font-weight: bold;
` 

export const SpeciesDetails = styled.div`
color: black;
font-weight: bold;
` 

export const StatusDetails = styled.div`
color: ${(props) => (props.status === "Alive" ? "green" : "red")};
font-weight: bold;
` 

export const ContainerDetails = styled.div`
display: grid;
  grid-template-columns: auto auto auto auto;



`
export const DivPaiDetails = styled.div`
padding: 10px;


`

export const ContentNameDetails = styled.h1`
color: blue;
font-size: 25px;

`