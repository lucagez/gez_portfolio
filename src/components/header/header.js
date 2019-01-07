import React, { Component } from 'react';

import style from './header.module.css';

export default class Header extends Component {
  componentDidMount() {
    const links = document.querySelectorAll(`.${style.nav}`);
    links.forEach(e => {
      e.addEventListener('click', e => {
        const target = e.target.attributes.href.value;
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  render() {
    return (
      <header className={`${style.header}`}>
        <main className={`${style.container}`}>
          <h1 className={`${style.title}`}>Luca<br />Gesmundo</h1>
          <div className={`${style.bar}`}>
            <ul>
              <li className={`${style.me}`}>web developer.</li>
              <li><a className={`${style.nav} ${style.shadow}`} href="#about">about.</a></li>
              <li><a className={`${style.nav} ${style.shadow}`} href="#contacts">contacts.</a></li>
            </ul>
          </div>
        </main>
      </header>
    )
  }
}
