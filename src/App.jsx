import React, { Component } from 'react';
import './App.css';
import BioSection from './BioSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import FooterSection from './FooterSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BioSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    );
  }
  //TODO - add tutoring section
}

export default App;
