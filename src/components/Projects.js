import React, { useState, useEffect } from 'react';
import data from './Data';
import Project from './Project';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  margin-top: 50px;
  .projectContainer {
    width: 90%;
    display: flex;
    flex-wrap: wrap;

    margin: auto;
    @media screen and (max-width: 600px) {
      width: 50%;
    }
 
`;
const btnProject = styled.div`
  width: 600px;
  background: red;
`;

function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProject = () => {
    setProjects(data);
  };

  useEffect(() => {
    fetchProject();
    console.log('test');
  }, []);
  console.log('projects => ', projects);

  return (
    <div>
      <btnProject>
        <button>Ecommerce</button>
        <button>Hotel</button>
        <button>Real Estate</button>
        <button>Restaurant</button>
      </btnProject>
      <ProjectWrapper>
        <div className="projectContainer">
          {projects &&
            projects.map((project) => (
              <div>
                <Project key={project.id} {...project} />
              </div>
            ))}
        </div>
      </ProjectWrapper>
    </div>
  );
}

export default Projects;
