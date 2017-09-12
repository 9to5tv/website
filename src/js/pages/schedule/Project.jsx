import React from 'react';

const renderTime = time => {
  const times = /(\d+):(\d+)/.exec(time);
  const hour = parseInt(times[1]);
  const minute = parseInt(times[2]);
  const minuteText = minute ? ':' + minute : '';
  if (hour <= 12) return hour + minuteText + 'AM';
  else return (hour - 12) + minuteText + 'PM';

};

const Project = ({ project }) => (
  <div className='schedule__project'>
    <h3 className='schedule__project__title'>{project.title} <span className='schedule__project__time'> // {renderTime(project.time)}</span></h3>
    <div className='schedule__project__artist'>{project.artist}</div>
  </div>
);

export default Project;