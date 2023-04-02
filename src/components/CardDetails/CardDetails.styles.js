import styled from "styled-components";

export const ContentDetails = styled.div`
  border: 2px solid #0b5ed7;
  border-radius: 10px;
  padding: 100px;
  cursor: pointer;
  position: absolute;
  justify-content: center;

  @media (max-width: 500px) {
    width: 80%;
    justify-content: center;
  }
`;

export const ContentImage = styled.div`
  @media (max-width: 500px) {
  }
`;

export const GenderDetails = styled.div`
  color: black;
  font-weight: bold;
`;

export const SpeciesDetails = styled.div`
  color: black;
  font-weight: bold;
`;

export const StatusDetails = styled.div`
  color: ${(props) => (props.status === "Alive" ? "green" : "red")};
  font-weight: bold;
`;

export const ContainerDetails = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
export const DivDetails = styled.div`
  padding: 10px;
`;

export const ContentNameDetails = styled.h1`
  color: blue;
  font-size: 25px;
`;
