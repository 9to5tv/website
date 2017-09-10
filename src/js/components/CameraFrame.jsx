import React from 'react';

const CameraFrame = ({ children, background, showZoom=true, tl=<Battery />, tr=<Live />, bl=<Timer />, br=<Bars /> }) => {

  const renderCorner = (corner, element) => (
    <div className={'camera-frame__corner camera-frame__corner--' + corner}>
      <div className='camera-frame__corner__content'>
        {element}
      </div>
    </div>
  );

  return (
    <div className='camera-frame-wrapper'>
      <div className='camera-frame'>
        {showZoom ? <Zoom /> : null}
        {tl ? renderCorner('tl', tl) : null}
        {tr ? renderCorner('tr', tr) : null}
        {bl ? renderCorner('bl', bl) : null}
        {br ? renderCorner('br', br) : null}

        <div className='camera-frame__content'>
          <div className='camera-frame__statue'>
            <img src={background} />
          </div>
          
          <div className='camera-frame__title-block'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Zoom = () => <div className='camera-frame__zoom'></div>;

export const Battery = () => (
  <div className='camera-frame__corner__content__battery'>
    <div className='camera-frame__corner__content__battery__bar'></div>
    <div className='camera-frame__corner__content__battery__bar'></div>
    <div className='camera-frame__corner__content__battery__bar'></div>
  </div>
);

export const Timer = () => <span><div className='countdown-timer'>00:00:09:25</div><div>00:9TO5:TV</div></span>;

export const Live = () => <div className='camera-frame__corner__content__live'><span>LIVE</span> <span className='recording-dot recording-dot--live'></span></div>;
export const StandBy = () => <div className='camera-frame__corner__content__live'><span>STAND BY</span> <span className='pause-icon recording-dot--live'></span></div>;

export const Bars = () => (
  <span>
    <div className='camera-frame__corner__content__bars'>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar camera-frame__corner__content__bars__bar--small'></div>
      <div className='camera-frame__corner__content__bars__bar camera-frame__corner__content__bars__bar--small'></div>
    </div>
    <div className='camera-frame__corner__content__bars'>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar'></div>
      <div className='camera-frame__corner__content__bars__bar camera-frame__corner__content__bars__bar--small'></div>
      <div className='camera-frame__corner__content__bars__bar camera-frame__corner__content__bars__bar--small'></div>
      <div className='camera-frame__corner__content__bars__bar camera-frame__corner__content__bars__bar--small'></div>
    </div>
  </span>
);

export default CameraFrame;