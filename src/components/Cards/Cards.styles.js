import styled from "styled-components";

export const Content = styled.div`
  border: 2px solid #0b5ed7;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 200%;
  }
`;

export const Image = styled.img`
  border-radius: 10px 10px 0 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  width: 50%;

  @media (max-width: 500px) {
    flex-direction: row;
    display: block;
  }
`;
export const DivPai = styled.div`
  padding: 10px;
`;

export const ContentName = styled.h1`
  color: blue;
  font-size: 16px;
`;
