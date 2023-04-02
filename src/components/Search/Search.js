import React from "react";
import { ButtonSearch, Form } from "./Search.styles";
import { InputSearch, Button } from "./Search.styles";

const Search = ({setSearchCharacter, setPageNumber}) =>{

const handleChange = (e) =>{
    setPageNumber(1)
  setSearchCharacter(e.target.value)
}

const handleClick = (e) =>{
    e.preventDefault()
  }
  

     return(
       <Form>
        <InputSearch onChange={handleChange} type="text" placeholder="Search character"></InputSearch>
        <ButtonSearch onClick={handleClick}>Search</ButtonSearch>
       </Form>
    )
}

export default Search