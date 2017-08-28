import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="projects-section">
        <h2>Projects section</h2>
        <div>
          <ProjectItem
            projectName="Sudoku-vision"
            description="An augmented reality application that reads, solves and displays the answer to sudoku puzzles in real-time when the user holds them up to the webcam."
          />
          <ProjectItem
            projectName="Kiki’s Delivery Service"
            description="Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore."
          />
          <ProjectItem
            projectName="Collab-A-Comic!"
            description="Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore."
          />
          <ProjectItem
            projectName="Study Buddy"
            description="Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore."
          />
        </div>
      </div>
    );
  }
}

