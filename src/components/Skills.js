import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <div className="left">
          <div class="skill" data-component="Skill">
            <label for="html-skill">HTML/CSS</label>
            <br />
            <progress id="htmlcss-skill" value="100" max="100">100%</progress>
          </div>

          <div class="skill" data-component="Skill">
            <label for="js-skill">Javascript</label>
            <br />
            <progress id="js-skill" value="90" max="100">90%</progress>
          </div>

          <div class="skill" data-component="Skill">
            <label for="bs-skill">Bootstrap</label>
            <br />
            <progress id="bs-skill" value="70" max="100">70%</progress>
          </div>

          <div class="skill" data-component="Skill">
            <label for="react-skill">React</label>
            <br />
            <progress id="react-skill" value="60" max="100">60%</progress>
          </div>
        </div>
        <div className="right">
        <div class="skill" data-component="Skill">
              <label for="photoshop-skill">Photoshop</label>
              <br />
              <progress id="photoshop-skill" value="85" max="100">85%</progress>
            </div>

            <div class="skill" data-component="Skill">
              <label for="illustrator-skill">Illustrator</label>
              <br />
              <progress id="illustrator-skill" value="95" max="100">95%</progress>
            </div>

            <div class="skill" data-component="Skill">
              <label for="xd-skill">XD</label>
              <br />
              <progress id="xd-skill" value="95" max="100">95%</progress>
            </div>

            <div class="skill" data-component="Skill">
              <label for="premiere-skill">Premiere Pro</label>
              <br />
              <progress id="premiere-skill" value="75" max="100">75%</progress>
            </div>
        </div>
      </div>
    );
  }
}

export default Skills;
