import React from 'react';
import './Project.css';
import PropTypes from 'prop-types';

class Project extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    githubLink: PropTypes.string,
    demoLink: PropTypes.string,
    imgUrl: PropTypes.string
  }

  render() {
    return (
      <div className='projectThumbnail'>
        <h3 className='projectName'>{this.props.name}</h3>
        <section className='linkSection'>
          <p className='projectLink'>{this.props.githubLink}</p>
          <p className='projectLink'>{this.props.demoLink}</p>
        </section>
      </div>
    );
  }
}

export default Project;