import React from "react";
import { Container } from "react-bootstrap";

// Container for the pages, so that they all look indentical
export const PageContainer = (props) => {
  return (
    <div className="d-flex" style={{ height: "94vh" }}>
      <Container className="shadow pt-0 mt-0bg-white rounded ">
        {props.children}
      </Container>
    </div>
  );
};
