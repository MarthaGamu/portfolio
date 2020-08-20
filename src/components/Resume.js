import React from "react";
import styled from "styled-components";

const StyledResume = styled.div`
  height: auto;
  min-height: 100%;
  .resumeContainer {
    width: 100%;
    height: 90%;
  }

  .innerContainer {
    width: 60%;
    height: 80%;
    margin: auto;
    margin-top: 100px;
    @media screen and (max-width: 600px) {
      width: 90%;
      margin-top: 50px;
    }
    .skillsContainer {
      display: flex;
     
      hr{
      margin-top:10px;
      padding-bottom:30px;
      }

      @media screen and (max-width: 600px) {
        display: block;
      }
    }
    .heading {
      flex: 1;
      @media screen and (max-width: 600px) {
        h2 {
          font-size: 25px;
        }
      }
    }
    .infoSide {
      flex: 2;

      .button{
       
        margin-top:50px;
      }
      button{
        padding:15px 30px;
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
  color:white;
      }
      @media screen and (max-width: 600px) {
        h3 {
          font-size: 20px;
        }
       
    }
  }
`;

function Resume() {
  return (
    <StyledResume>
      <div className="container-fluid">
        <div className="resumeContainer">
          <div className="innerContainer">
            <div className="content">
              <div className="skillsContainer">
                <div className="heading">
                  <h2>Skills</h2>
                </div>

                <div className="infoSide">
                  <h3>Front-end Development</h3>
                  <ul>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Bootsrap</li>
                    <li>Redux</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
              <hr />

              <div className="skillsContainer">
                <div className="heading">
                  <h2>Experience</h2>
                </div>

                <div className="infoSide">
                  <h5 className="Year">2018-2020</h5>
                  <ul>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Bootsrap</li>
                    <li>Redux</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                  </ul>
                  <h5 className="Year">2016-2018</h5>
                  <ul>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Bootsrap</li>
                    <li>Redux</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="skillsContainer">
                <div className="heading">
                  <h2>Education</h2>
                </div>

                <div className="infoSide">
                  <h5>2012-2016</h5>
                  <ul>
                    <li>Javascript</li>
                    <li>React Js</li>
                    <li>Bootsrap</li>
                    <li>Redux</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <div className="button">
                      <button>DOWNLOAD CV</button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledResume>
  );
}

export default Resume;
