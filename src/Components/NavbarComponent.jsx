import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { SearchBar } from "./SearchBar";

// Navbar component
export const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ position: "sticky", top: "0" }}>
      <Container>
        <div className="d-flex justify-content-start align-items-center w-100 col-12">
          <div className="text-start col-3">
            <Navbar.Brand href="/">Home</Navbar.Brand>
          </div>
          <div className="d-flex justify-content-center col-6 ">
            <div style={{ width: "80%" }}>
              <SearchBar />
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </Container>
    </Navbar>
  );
};
