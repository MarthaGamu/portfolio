import React from "react";
import styled from "styled-components";
import avatar from "./images/avatar.jpg";

const StyledContact = styled.div`
  .container-fluid {
    position: fixed;
    width: 100%;
    height: 100%;
    background: skyblue;
  }
  .innerContainer {
    width: 80%;
    height: 90%;
    margin: 100px auto;
    display: flex;
    background: red;

    .leftSide {
      background: yellow;
      flex: 1;
      text-align: center;
      h2 {
        padding-top: 50px;
        font-size: 40px;
        font-weight: 600;
      }
      p {
        padding: 50px 150px;
        font-size: 20px;
        font-weight: 600;
      }

      img {
        width: 400px;
        height: auto;
        border-radius: 4%;
        padding-top: 50px;
      }
    }
    .rightSide {
      background: pink;
      flex: 1;
    }
  }
`;

function Contact() {
  return (
    <StyledContact>
      <div className="container-fluid">
        <div className="innerContainer">
          <div className="leftSide">
            <h2>Martha Mandizvidza</h2>
            <img src={avatar} alt="avatar" />
            <p>
              {" "}
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader, “Its ‘words’ loosely approximate the frequency
              with which letters occur in English, which is why at a glance it
              looks pretty real.”
            </p>
          </div>

          <div className="rightSide">
            <i class="fab  fa fa-accessible-icon">Phone</i>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
