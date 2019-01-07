import React from 'react';

import style from './video.module.css';

export default (props) => (
  <div className={`${style.item}`}>
    <video loop muted autoPlay playsInline
      data-title={props.title}
      data-description={props.description}
      data-tags={props.tags}
      data-warning={props.warning}
      data-link={props.link}
      data-src={props.dataSrc} 
      data-index={props.index} 
      className={`${style.shadow}`}
      alt={props.description}
    >
        <source src={props.src} type="video/mp4"/>
    </video> 
  </div>
)