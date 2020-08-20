import React from "react";
import styled from "styled-components";
import avatar from "./images/avatar.jpg";

const StyledContact = styled.div`
  position: absolute;
  background: #f5f5f5;
  height: auto;
  min-height: 100%;
  .innerContainer {
    width: 80%;
    height: 90%;
    margin: 30px auto;
    display: flex;

    @media screen and (max-width: 600px) {
      display: block;
    }

    @media screen and (min-width: 1900px) {
      padding: 100px;
    }
    .leftSide {
      flex: 1;
      text-align: center;
      @media screen and (max-width: 600px) {
        order: 2;
      }
      h2 {
        padding-top: 50px;
        font-size: 40px;
        font-weight: 600;
      }
      p {
        font-size: 20px;
        font-weight: 300;
        padding: 10px 50px 0px 50px;
        @media screen and (max-width: 600px) {
          padding-top: 30px;
          font-size: 15px;
          font-weight: 400;
        }

        @media screen and (max-width: 1400px) {
          padding: 0px;
        }
      }

      img {
        width: 300px;
        height: auto;
        border-radius: 4%;
        padding-top: 50px;
        @media screen and (max-width: 600px) {
          width: 200px;
        }
      }
    }
    .rightSide {
      flex: 1;
      @media screen and (max-width: 600px) {
        order: 1;
      }
      h2 {
        font-size: 40px;
        padding-top: 50px;
        font-weight: 600;
        text-align: center;
        @media screen and (max-width: 600px) {
          padding-top: 10px;
        }
      }
      .line {
        width: 300px;
        margin: auto;
        @media screen and (max-width: 600px) {
          width: 220px;
        }
        hr {
          border-top: 3px dotted black;
        }
      }
    }
    .fontWrapper {
      margin-top: 80px;
      margin-left: 100px;
      @media screen and (max-width: 600px) {
        margin-top: 20px;
        margin-left: 0px;
      }
      p {
        padding: 10px;
        display: flex;
        align-items: center;
      }

      i {
        font-size: 50px;
        @media screen and (max-width: 600px) {
          font-size: 20px;
        }
      }
    }
    span {
      font-size: 20px;
      padding-left: 10px;
      font-weight: 300;
      @media screen and (max-width: 600px) {
        padding-left: 2px;
        font-size: 15px;
        font-weight: 400;
      }
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
            <h2>Contact Me</h2>
            <div className="line">
              <hr />
            </div>
            <div className="fontWrapper">
              <p>
                {" "}
                <i class="fa fa-phone-square" aria-hidden="true">
                  {" "}
                </i>{" "}
                <span> +44 775 1009 803</span>
              </p>

              <p>
                <i class="fas fa fa-envelope"></i>
                <span>marthamandizvidza@outlook.com</span>
              </p>

              <p>
                <i class="fab fa fa-skype"></i>
                <span>marthagmandizvidza</span>
              </p>

              <p>
                <i class="fab fa fa-github-square"></i>
                <span>MarGamu</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;
