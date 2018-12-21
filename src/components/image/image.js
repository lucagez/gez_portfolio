import React from 'react';

import style from './image.module.css';

export default (props) => (
  <div className={`${style.item}`}>
    <img 
      data-title={props.title}
      data-description={props.description}
      data-tags={props.tags}
      data-warning={props.warning}
      data-link={props.link}
      src={props.src}
      data-src={props.dataSrc} 
      data-index={props.index} 
      className={`${style.shadow}`}
      alt={props.description}
    />
  </div>
)