import React from 'react';
import request from 'superagent';
import Nav from '../../components/Nav';
import LiveContainer from '../../components/LiveContainer';
import LogoContainer from '../../components/LogoContainer';
import ProjectFeatureContainer from '../../components/ProjectFeatureContainer';
import FollowUs from '../../components/FollowUs';
import Partners from './Partners';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { live: false };
  }

  componentDidMount() {
    request('https://api.twitch.tv/helix/streams?user_login=9to5tv')
      .set('Client-ID', process.env.TWITCH_CLIENT_ID)
      .end((err, res) => {
        const body = res.body;
        console.log(body);
        if (!err && body.data && body.data.length > 0 && body.data[0].type === 'live') {
          this.setState({ live: true});
        }
      });
  }

  render() {
    return (
      <div className='home'>
        {this.state.live ? <LiveContainer /> : <LogoContainer />}
        <div className='home__section'>
          <h2 className='home__section__title'><span>FEATURED<br />/{'\u00A0'}PROJECTS</span></h2>
          <ProjectFeatureContainer title='A / B' artist='Harald Haraldsson' image={require('../../../img/artists/brannon-dorsey/cover.jpg')} />
          <ProjectFeatureContainer title='Basix' artist='Kevin Siwoff' />
          <ProjectFeatureContainer title='Holy Pager' artist='Brannon Dorsey' />
          <ProjectFeatureContainer title='Concert Series' artist='Mammal Gallery' />
        </div>
        <Partners />
        <FollowUs />
      </div>
    );
  }
}

export default Home;