import React from 'react';
import Nav from '../../components/Nav';
import artists from '../../artists';

class Artist extends React.Component {

  render() {
    const record = artists[this.props.match.params.id];
    console.log(record);

    return (
      <div className='artist'>
        <div className='artist__nav'><Nav /></div>
        <div className='artist__content'>
          <div className='artist__title'>{record.title}</div>
          <div className='artist__video' dangerouslySetInnerHTML={{ __html: record.embed }} />
          <div className='artist__description'><p>{record.projectDescription}</p></div>
          <div className='artist__images'>{record.images.map(src => <img key={src} src={'/'+src} />)}</div>
          <div className='artist__name'>{record.name}</div>
          <div className='artist__link'><a href={'http://' + record.link} target='_blank'>{record.link}</a></div>
          <div>{record.description.map(p => <p key={p}>{p}</p>)}</div>
        </div>
      </div>
    );
  }
}

export default Artist;