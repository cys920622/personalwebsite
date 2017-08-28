import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import BioSection from './BioSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <BioSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </div>
    );
  }
}

export default App;
