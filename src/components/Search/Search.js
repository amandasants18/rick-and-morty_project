import React from "react";
import { ButtonSearch, Form } from "./Search.styles";
import { InputSearch } from "./Search.styles";
import { MdSavedSearch } from "react-icons/md";

const Search = ({ setSearchCharacter, setPageNumber }) => {
  const handleChange = (e) => {
    setPageNumber(1);
    setSearchCharacter(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <InputSearch
        onChange={handleChange}
        type="text"
        placeholder="Search character"
      ></InputSearch>

    
    </Form>
  );
};

export default Search;
