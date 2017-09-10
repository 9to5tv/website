import React from 'react';
import LiveContainer from '../components/LiveContainer';
import GalleryContainer from '../components/GalleryContainer';

class Home extends React.Component {

  render() {
    return (
      <div className='home'>
        <LiveContainer />
        <GalleryContainer />
      </div>
    );
  }
}

export default Home;
      //   <div class="info-container">
      //     <div class="nav-container nav-piece">
      //       <div class="nav-blinder"></div>
      //       <div class="nav">
      //         <div class="nav__top"><a href="#top" class="scroll black no-slash">9to5 : Works in Progress</a></div>
      //         <div class="nav__right"><div class="nav__right__rotate">
      //           <span class="fixed">Sep 8 - Oct 6 2017</span>
      //           <a href="#" class="digital no-slash subscribe">STAY UP TO DATE</a>
      //         </div></div>
      //         <div class="nav__left" id='nav__apply'><a class="no-slash">STAY TUNED</a></div>
      //       </div>
      //     </div>
      //     <div class="container" id="top">
      //       ${require('!raw-loader!./partials/artists.html')}
      //       ${require('!raw-loader!./partials/partners.html')}
      //       ${require('!raw-loader!./partials/team.html')}
      //       ${require('!raw-loader!./partials/modal.html')}
      //       ${require('!raw-loader!./partials/subscribe-modal.html')}

      //       <div class="fixed-bottom nav-piece">
      //         <svg id="waveform">
      //           <polygon></polygon>
      //           <polyline></polyline>
      //         </svg>
      //       </div>
      //     </div>
      //   </div>
      // </div>