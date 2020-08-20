import React from "react";
import styled from "styled-components";

const StyledProject = styled.div`
  margin-top: 100px;
`;

function Project() {
  return (
    <div className="container-fluid">
      <StyledProject className="container">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </StyledProject>
    </div>
  );
}

export default Project;
