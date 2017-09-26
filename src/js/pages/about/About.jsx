import React from 'react';
import Nav from '../../components/Nav';
import FollowUs from '../../components/FollowUs';
import LogoContainer from '../../components/LogoContainer';
import InfoBlock from './InfoBlock';
import Team from './Team';

class About extends React.Component {

  render() {
    return (
      <div className='about-page'>
        <LogoContainer title='Works in Progress' />
        <InfoBlock />
        <Team />
        <FollowUs />
      </div>
    );
  }
}

export default About;