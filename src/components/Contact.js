import React from "react";
import styled from "styled-components";

const styledContact = styled.div`
  background: green;
  width: 100%;
  height: 100%;
`;

function Contact() {
  return (
    <styledContact>
      <div className="container"></div>
    </styledContact>
  );
}

export default Contact;
