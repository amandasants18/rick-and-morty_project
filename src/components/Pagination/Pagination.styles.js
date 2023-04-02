import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const ContainerPagination = styled.div`
display: flex;
justify-content: center;
gap: 5px;
margin-top: 20px;
margin-bottom: 10px;
`

export const Button = styled.button`

color: white;
background-color: blue;
border-radius: 10px;

`



export const StyledReactPaginate = styled(ReactPaginate)`
     display: flex;
     flex-wrap: nowrap;
     font-size: larger;
     justify-content: center;
     color:blue;
    list-style: none;
    cursor: pointer;
    font-size: 30px;
`;



