import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
// Search bar for the navbar where users can search for movies
export const SearchBar = () => {
  const navigate = useNavigate();
  function redirectToMoviePage(e) {
    navigate(`/${e.target.value}`);
  }
  return (
    <>
      <InputGroup>
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Enter a movie name here..."
          onKeyDown={(e) => (e.key === "Enter" ? redirectToMoviePage(e) : null)}
        />
        <Button
          variant="primary"
          id="button-addon1"
          onClick={(e) => redirectToMoviePage(e)}
        >
          <BsSearch size={22} />
        </Button>
      </InputGroup>
    </>
  );
};
