import React, { Component } from 'react';

import style from './gallery.module.css';
import Img from '../image/image.js';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.images.map(e => e.full),
    }
    this.onIntersection = this.onIntersection.bind(this);
  }
  componentDidMount() {
    const images = document.querySelector('#gallery').querySelectorAll('img');
    const config = {
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver(this.onIntersection, config);
    images.forEach(image => {
      this.observer.observe(image);
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
    const images = this.props.images.map((e, i) => {
      return (
      <Img 
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
        {images}
      </div>
    )
  }
}