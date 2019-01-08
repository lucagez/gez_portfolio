import React, { Component } from 'react';

import style from './gallery.module.css';
import Img from '../image/image.js';
import VIDEO from '../video/video.js';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   items: this.props.images.map(e => e.full),
    // }
    this.onIntersection = this.onIntersection.bind(this);
  }
  componentDidMount() {
    // const images = document.querySelector('#gallery').querySelectorAll('img');
    var isFirefox = /Android.+Firefox\//.test(navigator.userAgent);
    const video = document.querySelector('#gallery').querySelectorAll('video');
    const config = {
      rootMargin: '0px',
      threshold: 0.1
    };
    if (isFirefox) video.forEach(e => e.setAttribute('autoplay', ''));
    video.forEach(e => {
      e.addEventListener('mouseover', e => {
        e.target.play();
        e.target.parentNode.classList.toggle('pulse');
      });
      e.addEventListener('mouseout', e => {
        e.target.pause();
        e.target.parentNode.classList.toggle('pulse');
      });
    })
    this.observer = new IntersectionObserver(this.onIntersection, config);
    video.forEach(v => {
      this.observer.observe(v);
    });

  }
  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.01) {
        entry.target.classList.add(`${style.appear}`);
        this.observer.unobserve(entry.target);
      }
    });
  }
  render() {
    // const images = this.props.images.map((e, i) => {
    //   return (
    //   <Img 
    //     title={e.title}
    //     description={e.description}
    //     tags={e.tags}
    //     warning={e.warning}
    //     link={e.link}
    //     src={e.src} 
    //     key={i}
    //   />);
    // });

    const video = this.props.video.map((e, i) => {
      return (
      <VIDEO 
        title={e.title}
        description={e.description}
        tags={e.tags}
        warning={e.warning}
        link={e.link}
        src={e.src} 
        key={i}
      />);
    });

    return (
      <div id='gallery' className={`${style.gallery}`}>
        {video}
      </div>
    )
  }
}