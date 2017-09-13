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
    position: "Manager, Software Development at Hootsuite",
    body: "I had the pleasure of managing Dan and the team he was embedded in " +
    "during his 4 month co-op term at Hootsuite. From the very first day Dan " +
    "showed an impressive amount of initiative and grit and this continued " +
    "throughout his stay. He continued to take on larger and larger tasks with " +
    "decreasing amounts of supervision and was able to speak to strategy, " +
    "technology, risks, estimation, and changes throughout the product lifecycle. " +
    "He did not hesitate to ask questions and pull knowledge from within our team " +
    "and form new relationships outside of our team to fill gaps. Dan fit in well " +
    "with the collaborative, friendly, work-out-loud culture here and I would not " +
    "hesitate to hire him again."
  },
  {
    name: "Steve Song",
    position: "Senior Software Developer at Hootsuite",
    body: "Hootsuite throws co-ops in deep end of the pool that some find challenging. " +
    "Daniel performed very well and delivered results despite what he faced. He took " +
    "complete ownership of each story he worked on which showed maturity and responsibility. " +
    "His ability to understand requirements, write code and automated tests is " +
    "exceptional at his level. I can't wait to see what he can do as he gains more " +
    "industry experience."
  },
  {
    name: "Sam Reh",
    position: "Software Developer at Hootsuite",
    body: "Dan’s first day at Hootsuite set the tone for his entire co-op. It was the start of an internal hackathon, and rather than joining an existing team, he decided to jump up on stage and pitched an idea of his own, in front of the entire development organization. As members of the platform infrastructure team, our team is involved in a variety of projects with varying technical stacks. Dan was able to ramp up very quickly on each project, even in technologies he had no experience. When necessary, Dan did not hesitate to reach out to team members for help, as well as other teams throughout the company. Dan took ownership over all parts of the product lifecycle, from story creation, to demoing at the all hands meeting in front of entire Prod & Dev group, as well as tracking uptake and performance metrics after a project. On Dan’s last day at Hootsuite, several people in the department were surprised; they thought he was a full employee the entire time."
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
          name={item.name}
          position={item.position}
          body={item.body}
        />
      );
    });
  }
}
