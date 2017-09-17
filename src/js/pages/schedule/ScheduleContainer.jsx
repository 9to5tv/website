import React from 'react';

class ScheduleContainer extends React.Component {

  constructor(props) {
    super(props);
    const today = (new Date()).setHours(0,0,0,0);;
    let start = 0;
    for (let i = 0; i < props.events.length; i++) {
      const event = props.events[i];
      if ((new Date(event.date)).setHours(0,0,0,0) >= today) {
        start = i;
        break;
      }
    }
    const events = props.events.slice(start);
    console.log(events);
    this.state = { active: 0, events };
  }

  renderEvents() {
    const renderTime = time => {
      const times = /(\d+):(\d+)/.exec(time);
      const hour = parseInt(times[1]);
      const minute = parseInt(times[2]);
      const minuteText = minute ? ':' + minute : ':00';
      let text;
      if (hour <= 12) text = (hour < 10 ? '0' : '') + hour + minuteText + 'AM';
      else text = (hour - 12 < 10 ? '0' : '') + (hour - 12) + minuteText + 'PM';
      return (
        <div className='schedule-container__events__block__time'>
          {text.split('').map(c => <span>{c}</span>)}
        </div>
      );
    };

    const renderEvent = time => {
      const event = eventAtTime[time];
      if (event) {
        return (
          <div>{event.title} / {event.artist}</div>
        );
      } else {
        return null;
      }
    }

    const times = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
    const eventAtTime = {};
    for (let event of this.state.events[this.state.active].events) {
      eventAtTime[event.time] = event;
      if (times.indexOf(event.time) < 0) times.push(event.time);
    }
    times.sort((a,b) => {
      const aTimes = /(\d+):(\d+)/.exec(a);
      const bTimes = /(\d+):(\d+)/.exec(b);
      if (aTimes[0] === bTimes[0]) return parseInt(aTimes[1]) - parseInt(bTimes[1]);
      else return parseInt(aTimes[0]) - parseInt(bTimes[0]);
    });
    return (
      <div className='schedule-container__events'>
        {times.map(time => (<div key={time} className='schedule-container__events__block'>
          {renderTime(time)}
          <div className='schedule-container__events__block__event'>{renderEvent(time)}</div>
        </div>))}
      </div>
    )
  }

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
      <div className='schedule-container'>
        <div className='schedule-container__dates'>
          {this.state.events.map((event, i) => (
            <div key={event.date} onClick={() => this.setState({ active: i })} className={'schedule-container__dates__date' + (i === this.state.active ? ' schedule-container__dates__date--active' : '')}>{renderDate(event.date)}</div>
          ))}
        </div>
        {this.renderEvents()}
      </div>
    );
  }
}

export default ScheduleContainer;


// {schedule.live.map(date => (
//             <div key={(new Date(date.date))}>
//               <div className='schedule__section__date'>{renderDate(date.date)}</div>
//               <div>
//                 {date.events.map(p => (
//                   <div key={p.title+p.artist} className='schedule__section__project'><Project project={p} /></div>
//                 ))}
//               </div>
//             </div>
//           ))}