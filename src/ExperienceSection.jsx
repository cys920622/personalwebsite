import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';
import RecommendationItem from './RecommendationItem';

import './ExperienceSection.css';

import HootsuiteLogo from './images/hootsuite-logo.png';
import VisierLogo from './images/visier-logo.png';

//TODO: need to shorten recommendations
const recommendations = [
  {
    name: "Mike White",
    linkedInUrl: "https://www.linkedin.com/in/mike-white-b140182/",
    position: "Manager, Software Development at Hootsuite",
    fullBody: "",
    body: [
      "From the very first day Dan showed an impressive amount of initiative and grit and this continued throughout his stay. He continued to take on larger and larger tasks with decreasing amounts of supervision and was able to speak to strategy, technology, risks, estimation, and changes throughout the product lifecycle.",
      "Dan fit in well with the collaborative, friendly, work-out-loud culture here and I would not hesitate to hire him again."
    ]
  },
  {
    name: "Steve Song",
    linkedInUrl: "https://www.linkedin.com/in/songsteve/",
    position: "Senior Software Developer at Hootsuite",
    fullBody: "",
    body: ["His ability to understand requirements, write code and automated tests is exceptional at his level. I can't wait to see what he can do as he gains more industry experience."]
  },
  {
    name: "Sam Reh",
    linkedInUrl: "https://www.linkedin.com/in/samreh/",
    position: "Software Developer at Hootsuite",
    fullBody: "",
    body: [
      "Dan was able to ramp up very quickly on each project, even in technologies he had no experience.",
      "On Dan’s last day at Hootsuite, several people in the department were surprised; they thought he was a full employee the entire time."
    ]
  }
];

export default class ExperienceSection extends Component {
  render() {
    return (
      <div className="experience-section">
        <h1>Technical Experience</h1>
        <div>
          <ExperienceItem
            itemName="Hootsuite"
            position="Software developer co-op (May - Aug 2017)"
            description=""
            itemUrl="https://hootsuite.com/"
            imageUrl={HootsuiteLogo}
            isLayoutReversed={false}
          />
          <hr className="experience-hr"/>
          <div>{this.renderRecommendations()}</div>
          <hr className="experience-hr"/>
          <ExperienceItem
            itemName="Visier"
            position="Software developer co-op (May - Dec 2016)"
            description=""
            itemUrl="https://www.visier.com/"
            imageUrl={VisierLogo}
            isLayoutReversed={true}
          />
        </div>
      </div>
    );
  }

  renderRecommendations() {
    return recommendations.map((item) => {
      return (
        <RecommendationItem
          key={item.name}
          name={item.name}
          linkedInUrl={item.linkedInUrl}
          position={item.position}
          body={item.body}
        />
      );
    });
  }
}
