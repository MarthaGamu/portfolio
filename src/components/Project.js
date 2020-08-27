import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  margin-top: 120px;
`;

function Project({ name, image, Description }) {
  return (
    <div className="container-fluid">
      <StyledProject className="container">
        <div className="card" style={{ width: '500px' }}>
          <img className="card-img-top" src={image} alt="Card cap" />
          <div className="card-body">
            <h5>{name}</h5>
            <p className="card-text">{Description}</p>
            <hr />
            <a
              href="#"
              className="btn btn-primary"
              style={{ marginRight: '10px' }}
            >
              GITHUB
            </a>

            <a href="#" className="btn btn-primary">
              LIVE DEMO
            </a>
          </div>
        </div>
      </StyledProject>
    </div>
  );
}

export default Project;
