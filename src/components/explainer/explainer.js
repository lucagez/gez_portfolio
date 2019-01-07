import React from 'react';

import style from './explainer.module.css';

export default (props) => (
  <div className={`${style.explainer}`}>
    <p>{props.what}<br/>&#x2b07;</p>
  </div>
)