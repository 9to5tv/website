import React from 'react';

const Partners = () => (
  <div className='container__page partners' id='partners'>
    <div className='container__page__contents'>
      <h3 className='container__page__subheading'>/ Presented by</h3>
      <div className='sponsors'>
        <a href='http://www.fieldexperimentatl.com/' className='no-slash big-sponsor' target='_blank'>
          <img height='auto' width='450' src={require('../../../img/fexp.png')} />
        </a>
        <a href='http://creativity.gsu.edu/' className='no-slash big-sponsor' target='_blank'><img height='auto' width='450' src={require('../../../img/cmii.png')} /></a>
      </div>

      <h3 className='container__page__subheading'>/ Sponsors</h3>
      <div className='sponsors'>
        <a href='https://mailchimp.com' className='no-slash' target='_blank'><img height='auto' width='230' src={require('../../../img/mailchimp.png')} /></a>
        <a href='http://www.chemistryagency.com/' className='no-slash' target='_blank'><img height='auto' width='220' src={require('../../../img/chemistry.png')} /></a>
        <a href='https://www.wafflehouse.com/' className='no-slash' target='_blank'><img height='auto' width='200' src={require('../../../img/waho.png')} /></a>
        <a href='http://g.co/ami' className='no-slash' target='_blank'><img height='auto' src={require('../../../img/ami.png')} /></a>
      </div>

      <h3 className='container__page__subheading'>/ Partners</h3>
      <p>
        <a href='http://info.maestro.io/' className='digital' target='_blank'>Maestro.io</a> Use Maestro to create engaging video experiences.<br />
        <a href='http://masscollective.org/' className='digital' target='_blank'>MASS Collective</a> Supporting Musical, Artistic, Scientific, and Social pursuits<br />
        <a href='http://www.mammalgallery.com/' className='digital' target='_blank'>MAMMAL Gallery</a> Atlanta&rsquo;s favorite ever-evolving carte blanche<br />
      </p>

      <p className='blurb'>9to5 relies on supporters like you to keep the experiment going. We value all of our supporters, big or small, and would love to talk with you about how you can be a part of our platform. All donations are tax deductible, fund independent artists and technologists, and help facilitate groundbreaking innovation across all interests and industries. Reach out. We&rsquo;re ready to talk to you.</p>

      <div className='partners__cta'>
        <div className='partners__cta__row'>
          <span className='md'>BECOME</span>
          <span className='md'>a</span>
          <span className='md'>PARTNER</span>
        </div>
        <a href='mailto:info@9to5.tv' className='partners__cta__row no-slash'>
          <span className='lg'>/</span>
          <span className='lg'>T</span>
          <span className='lg'>O</span>
          <span className='lg'>D</span>
          <span className='lg'>A</span>
          <span className='lg'>Y</span>
          <span className='lg'>/</span>
        </a>
      </div>
      <p className='partners__benefits'>Ad Placement Across Platforms</p>
      <p className='partners__benefits'>501(c)(3) Deductible Donation</p>
      <p className='partners__benefits'>Position with Progress</p>
    </div>
  </div>
);

export default Partners;