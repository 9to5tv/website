import React from 'react';
import Frame from '../../components/Frame';
import Project from './Project';
import schedule from '../../schedule';



class Schedule extends React.Component {

  render() {

    const renderDate = date => {
      const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
      const d = new Date(date);
      return (
        <span>
          {days[d.getDay()]}, {d.getMonth() + 1}/{d.getDate()}
        </span>
      );
    };

    return (
      <div className='schedule'>
        <Frame />
        <div className='schedule__section'>
          <h2 className='schedule__section__title'>LIVE<br />/{'\u00A0'}BROADCASTS</h2>
          {schedule.live.map(date => (
            <div key={(new Date(date.date))}>
              <div className='schedule__section__date'>{renderDate(date.date)}</div>
              <div>
                {date.events.map(p => (
                  <div key={p.title+p.artist} className='schedule__section__project'><Project project={p} /></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='schedule__section'>
          <h2 className='schedule__section__title'>GALLERY<br />/{'\u00A0'}INSTALLATIONS</h2>
          {schedule.gallery.map(p => (
            <div key={p.title+p.artist} className='schedule__section__project'><Project project={p} /></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Schedule;