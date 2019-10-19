import React from 'react';
import './Project.css';
import PropTypes from 'prop-types';

class Project extends React.Component {
  static propTypes = {
    project: PropTypes.object
  }

  static defaultProps = {
    project: {
      name: '',
      githubLink: '',
      demoLink: '',
      desc: '',
      imgUrl: '',
      techStack: []
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      overlay: false,
      blur: false
    };
  }

  enableMouseOverEffects = () => {
    this.setState({
      overlay: true,
      blur: true
    });
  }
  disableMouseOverEffects = () => {
    this.setState({
      overlay: false,
      blur: false
    });
  }
  render() {
    const imgUrl = require(`../images/${this.props.project.imgUrl}`);
    const techStack = this.props.project.techStack.map((tech, index) => {
      const iconUrl = require(`../images/${tech}.png`);
      return <li key={index}>
        <img className='techIcon' src={iconUrl} alt={tech}></img>
      </li>;
    });

    return (
      <div className='project'>
        <div
          className='projectThumbnail'
          onMouseOver={this.enableMouseOverEffects}
          onMouseOut={this.disableMouseOverEffects}
        >
          <img
            className={this.state.blur ? 'blur' : ''}
            src={imgUrl}
            alt={'Project Thumbnail'}
          />
          <div className={'overlay' + (this.state.overlay ? ' active' : '')}>
            <a
              href={this.props.project.githubLink}
              id='githubLink'
              className='demoLink'
            >
              Github
            </a>

            <a
              href={this.props.project.demoLink}
              id='demoLink'
              className='demoLink'
            >
              Live Demo
            </a>
          </div>
        </div>

        <section className='projectDetails'>
          <h3 className='projectName'>{this.props.project.name}</h3>
          <p className='projectDesc'>{this.props.project.desc}</p>
          <ul className='techStack'>{techStack}</ul>
        </section>
      </div>
    );
  }
}

export default Project;