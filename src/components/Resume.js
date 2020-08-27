import React from 'react';
import styled from 'styled-components';

const StyledResume = styled.div`
  height: auto;
  min-height: 100%;
  line-height: 1.8;
  .resumeContainer {
    width: 100%;
    height: 90%;
  }
 p{
  word-spacing: 2px;
 }
 li{
  word-spacing: 2px;
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
                    <li>GIT</li>
                  </ul>
                </div>
              </div>
              <hr />

              <div className="skillsContainer">
                <div className="heading">
                  <h2>Experience</h2>
                </div>

                <div className="infoSide">
                  <h5 className="Year">Current</h5>
                  <ul>
                    <li>
                      Developed Ecommerce clothes store with redux and react js
                    </li>
                    <li>
                      Developed Ecommerce grocery store with redux and react js
                    </li>
                    <li>Developed Hotel Website</li>
                    <li>Developed Real Estate Website</li>
                    <li>Developed Restaurant Website</li>
                  </ul>

                  <h6>
                    <b>IT Support Consultant</b>
                  </h6>
                  <p>
                    <b>
                      Company Name :CONNECT- Zimbabwe Institute of Systemic
                      Therapy
                    </b>
                  </p>
                  <h6>Year : Jan 2017 – Aug 2018</h6>
                  <h6>Location:Harare</h6>

                  <ul>
                    <li>
                      Researched and purchased equipment for the IT department.
                    </li>

                    <li>
                      IT consultant and business analyst in improving and
                      maintaining software systems across the college.
                    </li>

                    <li>
                      Updated and maintained virus protection software,
                      performed system scans and removed any detected viruses,
                      spyware and malware.Maintained technical and vendor
                      product information and assisted in establishing
                      performance standards, policies, and procedures.
                    </li>

                    <li>
                      Attending to all needs of employees and their network
                      concerns.
                    </li>

                    <li>
                      Drafting network efficiency monthly reports to determine
                      and recommend if any changes were necessary.
                    </li>

                    <li>
                      Carrying out research on new network functions and
                      features that could be useful to the company/college
                    </li>
                  </ul>

                  <h6>
                    <b>IT Intern</b>
                  </h6>
                  <p>
                    <b>
                      Company Name :Ministry of Agriculture Mechanisation and
                      Irrigation Development
                    </b>
                  </p>
                  <h6> Year :Jan 2014 – Dec 2014</h6>

                  <ul>
                    <h6> Employment Duration :12 mos Location :Harare</h6>
                    <li>
                      Diagnosis of desktop, application, networking and
                      infrastructure issues.
                    </li>
                    <li>
                      Experience of supporting a wide and varied client base.
                    </li>
                    <li>Troubleshooting PC’s, laptops and mobile devices.</li>
                    <li>Providing 1st/2nd line support to users.</li>
                    <li>
                      Administering the IT department’s policies and procedures.
                    </li>
                    <li>
                      Installation and support of telecommunication equipment.
                    </li>
                    <li>
                      Maintaining a log of all problems detected and system back
                      ups.
                    </li>
                    <li>
                      Responsible for maintaining backups and for project work
                      such as new builds.
                    </li>
                    <li>
                      Working closely with software suppliers to resolve
                      operational issues.
                    </li>
                    <p>
                      {' '}
                      Responsible for supporting: Windows XP/Vista/Windows 7/
                      Office 2007 and 2013, Windows Server, Small Business
                      Server 2003/2008, Active Directory management Exchange
                      2003/2007, Blackberry Server/Windows Mobile, Backup
                      products, Anti-Virus products, DNS/DHCP, TCP/IP, Ethernet,
                      wireless router and Firewall Configurations.
                    </p>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="skillsContainer">
                <div className="heading">
                  <h2>Education</h2>
                </div>

                <div className="infoSide">
                  <h6>Catholic University of Zimbabwe</h6>
                  <h6>Year: 2012 - 2015</h6>
                  <p>
                    Barchelor of Business Management and Information
                    Technology,Honors
                  </p>
                  <p>Degree class:2.1</p>

                  <h6> Hatfield Girls High School,Zimbabwe</h6>
                  <h6>Year: 2008 - 2010</h6>
                  <h6>Subjects:</h6>
                  <p>Management of Business</p>
                  <p>Geography</p>
                  <p>Accounting</p>
                  <div className="button">
                    <button>DOWNLOAD CV</button>
                  </div>
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
