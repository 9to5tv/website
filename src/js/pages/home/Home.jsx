import React from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';
import LiveContainer from '../../components/LiveContainer';
import LogoContainer from '../../components/LogoContainer';
import ProjectFeatureContainer from '../../components/ProjectFeatureContainer';
import FollowUs from '../../components/FollowUs';
import Partners from './Partners';
import artists from '../../artists';

const featured = [
  artists['harald-haraldsson'],
  artists['brannon-dorsey'],
  artists['kevin-siwoff'],
];

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
          <div className='home__section__details'>
            <span className='n9to5'>9to5</span> is a digital art exhibition that dissolves the boundary between artist and audience by way of an experimental livestream and emerging interfaces. <Link to='/about'>Learn More</Link>
          </div>
        </div>
        <div className='home__section'>
          <h2 className='home__section__title'><span>FEATURED<br />/{'\u00A0'}PROJECTS</span></h2>
          {featured.map(p => (
            <div className='home__section__project' key={p.id}>
              <ProjectFeatureContainer title={p.title} artist={p.name} image={p.cover} url={'/artists/' + p.id} />
            </div>
          ))}
        </div>
        <Partners />
        <FollowUs />
      </div>
    );
  }
}

export default Home;