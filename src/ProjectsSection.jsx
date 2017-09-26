import React, { Component } from 'react';
import SideBySideItem from './SideBySideItem';
import './ProjectsSection.css';

import SudokuPhoto from './images/sudoku-vision.gif'
import CollabAComicPhoto from './images/collab-a-comic.jpg';
import StudyBuddyPhoto from './images/study-buddy.png';
import KikiPhoto from './images/kikisdeliveryservice.png';

const projects = [
  {
    itemName: "Sudoku-vision",
    tags: ["Computer Vision", "C++", "OpenCV"],
    description: "An augmented reality application that reads, solves and displays the answer to sudoku puzzles in real-time when the user holds them up to the webcam.",
    imageUrl: SudokuPhoto,
    itemUrl: "https://github.com/cys920622/sudoku-vision",
    isLayoutReversed: false
  },
  {
    itemName: "Kiki’s Delivery Service",
    tags: ["Java", "Swing", "JDBC", "MySQL"],
    description: "An application modeling a parcel delivery service.",
    itemUrl: "https://github.com/cys920622/kikisdeliveryservice",
    imageUrl: KikiPhoto,
    isLayoutReversed: true
  },
  {
    itemName: "Collab-A-Comic!",
    tags: ["JavaScript", "NodeJS", "MongoDB", "Express.js","Jade"],
    description: "A collaborative comic strip writing platform.",
    imageUrl: CollabAComicPhoto,
    itemUrl: "https://github.com/cys920622/Collab-A-Comic",
    isLayoutReversed: false
  },
  {
    itemName: "Study Buddy",
    tags: ["Python", "Django", "JavaScript", "Hackathon", "Google Maps API"],
    description: "Web-app that helps students find people nearby that are studying the same subject.",
    imageUrl: StudyBuddyPhoto,
    itemUrl: "https://github.com/cys920622/StudyBuddy",
    isLayoutReversed: true
  }
];

export default class ProjectsSection extends Component {
  render() {
    return (
      <div className="projects-section">
        <h1>Selected Projects</h1>
        {this.renderProjectItems()}
      </div>
    );
  }

  renderProjectItems() {
    return projects.map((project) => {
      return (
        <div>
          <SideBySideItem key={project.itemName} {...project} />
          <hr className="hr-divider"/>
        </div>
      )
    })
  }
}

