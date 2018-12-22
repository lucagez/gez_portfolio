import React from 'react';

import style from './about.module.css';

export default (props) => (
  <section id="about" className={`${style.container}`}>
    <div className={`${style.text}`}>
      <h1>👋 <span>Hi</span></h1>
      <p>I am Luca Gesmundo, web developer from Italy 🇮🇹</p>
      <p>I spend most of my time working with Javascript (client and server) on things that live on the web. Ranging from data visualization and front-end development to server side software and custom bots.</p>
      <p>Using tools like: <code>node.js</code> <code>React</code> <code>Gatsby</code> <code>webpack</code> <code>css3</code> <code>canvas</code> <code>d3.js</code></p>
      <p>I have always been fascinated from the huge Internet; now I am striving for making software that connect people in meaningful ways.</p>
      <p>I graduated in Mechanical Engineering with a great passion about crunching complex problems.</p>
      <p>In my free time I volunteer as an educator for young boys in my district, doing my best to make them grow as good citizens.</p>
      <p>Let's leave this world a little better than we found it,</p>
      <p>Gez</p>
    </div>
  </section>
)