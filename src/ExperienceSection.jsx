import React, { Component } from 'react';
import SideBySideItem from './SideBySideItem';
import RecommendationItem from './RecommendationItem';

import './ExperienceSection.css';

import HootsuiteLogo from './images/hootsuite-logo.png';
import VisierLogo from './images/visier-logo.png';

const recommendations = [
  {
    name: "Steve Song",
    linkedInUrl: "https://www.linkedin.com/in/songsteve/",
    position: "Senior Software Developer at Hootsuite",
    fullBody: "",
    body: ["... His ability to understand requirements, write code and automated tests is exceptional at his level. I can't wait to see what he can do as he gains more industry experience."]
  },
  {
    name: "Mike White",
    linkedInUrl: "https://www.linkedin.com/in/mike-white-b140182/",
    position: "Manager, Software Development at Hootsuite",
    fullBody: "",
    body: [
      "... From the very first day Dan showed an impressive amount of initiative and grit and this continued throughout his stay. He continued to take on larger and larger tasks with decreasing amounts of supervision and was able to speak to strategy, technology, risks, estimation, and changes throughout the product lifecycle ...",
      "... Dan fit in well with the collaborative, friendly, work-out-loud culture here and I would not hesitate to hire him again."
    ]
  },
  {
    name: "Sam Reh",
    linkedInUrl: "https://www.linkedin.com/in/samreh/",
    position: "Software Developer at Hootsuite",
    fullBody: "",
    body: [
      "... Dan was able to ramp up very quickly on each project, even in technologies he had no experience ...",
      "... On Dan’s last day at Hootsuite, several people in the department were surprised; they thought he was a full employee the entire time."
    ]
  },
  {
    name: "David Andrews",
    linkedInUrl: "",
    position: "Software Developer at Hootsuite",
    fullBody: "",
    body: [
      "Dan's willingness to not only venture into unfamiliar areas of the codebase, but also take ownership and share that knowledge with the team, showed a level of maturity beyond his position ..."
    ]
  }
];

export default class ExperienceSection extends Component {
  render() {
    return (
      <div className="experience-section">
        <h1>Technical Experience</h1>
        <div>
          <SideBySideItem
            itemName="Hootsuite"
            subheader="Software developer co-op (May - Aug 2017)"
            pointFormDescription={[
              "Built and released front-end React components, including a navigation menu that receives >50k clicks per day",
              "Contributed new features to back-end Scala microservices that were critical to winning multi-million dollar deals – Added social media integrations using the LinkedIn and Facebook APIs",
              "Built social media integrations using the LinkedIn and Facebook APIs",
              "Monitored and diagnosed problems in legacy back-end services and the continuous integration pipeline"
            ]}
            itemUrl="https://hootsuite.com/"
            imageUrl={HootsuiteLogo}
            isLayoutReversed={false}
          />
          <hr className="hr-divider"/>
          <div>
            {this.renderSingleRecommendation(1)}
            {this.renderSingleRecommendation(0)}
          </div>
          <hr className="hr-divider"/>
          <SideBySideItem
            itemName="Visier"
            subheader="Software developer co-op (May - Dec 2016)"
            pointFormDescription={[
              "Used TypeScript, Angular 2 and Scala to deliver new features for Visier’s business analytics and data visualization platform",
              "Shipped over 30 features and more than 25 bug fixes, working on both the front- and back-end",
              "Delivered feature demos, performed code reviews, and gained HR industry knowledge"
            ]}
            itemUrl="https://www.visier.com/"
            imageUrl={VisierLogo}
            isLayoutReversed={true}
          />
          <hr className="hr-divider"/>
          <div>
            {this.renderSingleRecommendation(2)}
            {this.renderSingleRecommendation(3)}
          </div>
        </div>
      </div>
    );
  }

  // Warning - not safe for index-out-of-bounds
  renderSingleRecommendation(index) {
    let item = recommendations[index];
    return (
      <RecommendationItem key={item.name} {...item} />
    );
  }

  renderRecommendations() {
    return recommendations.map((item) => {
      return (
        <RecommendationItem key={item.name} {...item} />
      );
    });
  }
}
