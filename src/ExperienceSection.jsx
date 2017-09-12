import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';

export default class ExperienceSection extends Component {
  render() {
    return (
      <div className="experience-section">
        <h2>Experience section</h2>
        <div>
          <ExperienceItem
            itemName="Hootsuite"
            position="Software developer co-op"
            description="Lorem ipsum ..."
          />
          <ExperienceItem
            itemName="Visier"
            position="Software developer co-op"
            description="Lorem ipsum ..."
          />
          Experiences go here...
        </div>
      </div>
    );
  }
}
