import React, { Component } from 'react';

import style from './label.module.css';

export default class Label extends Component {
  componentDidMount() {
    const label = document.querySelector(`#label`);
    const is_small = window.innerWidth < 600;
    const shadow = style.linkShadow;
    document.body.addEventListener('click', e => {
      const title = e.target.attributes['data-title'];
      if (title) {
        e.preventDefault();
        const is_right = e.clientX > window.innerWidth / 2;
        const is_bottom = e.clientY > window.innerHeight / 2;
        const attr = e.target.attributes;
        const x = is_small ? '-50%' : `${e.clientX + (is_right ? -400 : 20)}px`;
        const y = is_small ? '0' : `${e.clientY + (is_bottom ? -200 : 20)}px`;
        label.style.display = 'block';
        // setTimeout(() => label.style.transform = `translate(${x}, ${y})`, 1);
        window.requestAnimationFrame(() => {
          label.style.transform = `translate(${x}, ${y}) rotateZ(360deg)`;
        });
        const warn = attr['data-warning'].value ? `<strong>${attr['data-warning'].value}</strong>` : ''
        label.innerHTML = `
          <h1>${title.value}</h1>
          <p>${attr['data-description'].value}</p>
          <div>
            ${attr['data-tags'].value}
            ${warn}
          </div>
          <a id="goto" href="${attr['data-link'].value}" target="_blank" class="${shadow}">go to project &#x27A1;</a>
          <div>
          </div>
        `
      } else if (label.contains(e.target)) {
        console.log('on label');
      } else {
        label.style.display = 'none';
      }
    });
    window.onscroll = () => {
      label.style.display = 'none';
      if (is_small) label.style.transform = 'translate(-50%, 150%)';
    }
  }

  render() {
    return (
      <div id="label" className={`${style.label} ${style.shadow}`}></div>
    )
  }
} 