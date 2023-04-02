import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 5px;
  flex-direction: column;
  align-items: center;
`;

export const InputSearch = styled.input`
border-radius: 8px;
border: 2px solid #0b5ed7;
width: 40%;
height: 40px;
padding: 10px 5px;

@media(max-width: 500px){
   align-items: center;
   width: 80%;
  }
}
`;

export const ButtonSearch = styled.button`
  width: 5%;
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 8px;

  @media (max-width: 500px) {
    width: 100px;
    margin-top: 5px;
  }
`;
