import React from 'react';

const InfoBlock = () => (
  <div className='above-fold'>
    <div>
      <div className='above-fold__header'>
        <p><span className='n9to5'>9to5</span> is a month-long digital art exhibition in Atlanta that dissolves the boundary between artist and audience by way of an experimental livestream and emerging interfaces.</p>
        <div className='above-fold__date'>
          <div className='above-fold__date__row'>
            <span>8th</span>
            <span className='line'></span>
            <span>6th</span>
          </div>
          <div className='above-fold__date__row'>
            <span>SEPTEMBER</span>
            <span className='raised'><span>to</span></span>
            <span>OCTOBER</span>
          </div>
        </div>
        <p>The ideal <span className='n9to5'>9to5</span> participants can interact with  projects, performances, and broadcasts that influence the final artworks using a custom built suite of tools.</p>
      </div>
    </div>
  </div>
);

export default InfoBlock;