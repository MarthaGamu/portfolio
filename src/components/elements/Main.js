import React from "react";
import styled from "styled-components";
import avatar from "../images/avatar.jpg";

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .avatar {
    width: 300px;
    height: auto;

    margin: auto;
    padding-top: 250px;
    @media screen and (max-width: 600px) {
      width: 150px;
      padding-top: 80px;
    }
    @media screen and (max-width: 1500px) {
      padding-top: 150px;
    }

    img {
      width: 300px;
      height: auto;
      border-radius: 50%;

      @media screen and (max-width: 600px) {
        width: 150px;
      }
    }
  }
  .infoBanner {
    width: 80%;
    margin: auto;
  }
  .innerBanner {
    width: 45%;
    color: white;
    margin: 40px auto;
    text-align: center;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
    @media screen and (max-width: 1500px) {
      width: 60%;
    }
    h1 {
      font-size: 60px;
      padding: 30px;
    }
    p {
      font-size: 30px;
      padding: 30px;
    }

    hr {
      border-top: 5px dotted white;
    }
    @media screen and (max-width: 600px) {
      h1 {
        font-size: 25px;
        padding: 5px;
      }
      p {
        font-size: 15px;
        padding: 5px;
      }

      hr {
        border-top: 2px dotted white;
      }
    }
    @media screen and (max-width: 1500px) {
      h1 {
        font-size: 40px;
        padding: 2px;
      }
      p {
        font-size: 20px;
        padding: 2px;
      }

      hr {
        border-top: 4px dotted white;
      }
    }
  }
`;

function Main() {
  return (
    <StyledContainer>
      <div className="container-fluid">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <div className="infoBanner">
        <div className="innerBanner">
          <h1>Front-end Developer</h1>
          <hr />
          <p>HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT | REDUX</p>
        </div>
      </div>
    </StyledContainer>
  );
}

export default Main;
