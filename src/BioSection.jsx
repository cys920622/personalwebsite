import React, { Component } from 'react';
import './BioSection.css';
import pic from './images/headshot.png';

export default class BioSection extends Component {
  render() {
    return (
      <div className="bio-section">
        <img className="head-shot" src={pic} />
        <div className="bio-paragraph">
          <h2>Biography</h2>
          <div>Hey there! My name is Daniel and I'm a full-stack web developer. Lorem ipsum dolor sit amet, et mazim possim electram his, mei in dolorum meliore. An sumo errem populo sit. Vel offendit expetendis ut. Mea tale tritani honestatis ea. Inani error id sea.

          Sit cibo utroque no. Vix detraxit praesent necessitatibus ei, stet efficiantur philosophia per eu, mei saepe quidam efficiantur an. Vel nostrum moderatius et, accusam patrioque sea ne. Illum referrentur vix at.

          Doming recteque id nec, vel ei meis detraxit. Delicata expetenda vituperata mei ex, mei an perfecto sensibus, est persecuti constituam in. Sea id eros dicat inimicus, molestie vivendum lobortis ut nec. His autem platonem vituperatoribus no.

          Id apeirian cotidieque nam, id alia iudico iuvaret cum. Eum an alia dolores, vis impetus quaerendum appellantur no, vel dicta imperdiet ne. Munere patrioque persecuti eu sed, cum assum soluta blandit ne, cum cu wisi error qualisque. No vix simul iudico, libris debitis conceptam ea eum.</div>
          </div>
      </div>
    );
  }
}