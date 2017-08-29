import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import './ProjectsSection.css';

import SudokuPhoto from './images/sudoku-vision.gif'
import CollabAComicPhoto from './images/collab-a-comic.jpg';
import StudyBuddyPhoto from './images/study-buddy.png';
import KikiPhoto from './images/kikisdeliveryservice.png';

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="projects-section">
        <h2>Projects section</h2>
        <div className="projects-table">
          <div className="projects-row">
            <ProjectItem
              projectName="Sudoku-vision"
              description="An augmented reality application that reads, solves and displays the answer to sudoku puzzles in real-time when the user holds them up to the webcam."
              url="https://github.com/cys920622/sudoku-vision"
              imageUrl={SudokuPhoto}
            />
            <ProjectItem
              projectName="Kiki’s Delivery Service"
              description="Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore."
              url="https://github.com/cys920622/kikisdeliveryservice"
              imageUrl={KikiPhoto}
            />
            <ProjectItem
              projectName="Collab-A-Comic!"
              description="Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore."
              url="https://github.com/cys920622/Collab-A-Comic"
              imageUrl={CollabAComicPhoto}
            />
          </div>
          <div className="projects-row">
            <ProjectItem
              projectName="Study Buddy"
              description="Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore."
              url="https://github.com/cys920622/StudyBuddy"
              imageUrl={StudyBuddyPhoto}
            />
          </div>



        </div>
      </div>
    );
  }
}

