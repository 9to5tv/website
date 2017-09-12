import React from 'react';

const renderTime = time => {
  const times = /(\d+):(\d+)/.exec(time);
  const hour = parseInt(times[1]);
  const minute = parseInt(times[2]);
  const minuteText = minute ? ':' + minute : '';
  if (hour <= 12) return hour + minuteText + 'AM';
  else return (hour - 12) + minuteText + 'PM';

};

const renderArtistUrl = url => <a className='digital' href={'http://' + url} target='_blank'>{url}</a>;
const renderProjectUrl = url => <a href={url} target='_blank'>launch</a>;

const Project = ({ project }) => (
  <div className='schedule__project'>
    <h3 className='schedule__project__title'>{project.title} <span className='schedule__project__time'>{project.time ? '// ' + renderTime(project.time) : null}</span></h3>
    <div className='schedule__project__artist'>{project.artist} {project.artistUrl ? renderArtistUrl(project.artistUrl) : null}</div>
    <div className='schedule__project__description'>{project.projectUrl ? renderProjectUrl(project.projectUrl) : null} {project.description}</div>
  </div>
);

export default Project;