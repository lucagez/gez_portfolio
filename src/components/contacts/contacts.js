import React from 'react';

import style from './contacts.module.css';

export default (props) => (
  <section id="contacts" className={`${style.container}`}>
    <div className={`${style.text}`}>
      <h1>📞 <span>Contacts</span></h1>
      <p><strong>email:</strong> <a target="_blank" href="mailto:contact@lucagez.net">contact@lucagez.net</a></p>
      <p><strong>github:</strong> <a target="_blank" href="https://github.com/lucagez">github.com/lucagez</a></p>
      <p><strong>codepen:</strong> <a target="_blank" href="https://codepen.io/lucagez/">codepen.io/lucagez</a></p>
      <p><strong>facebook:</strong> <a target="_blank" href="https://facebook.com/luca.ges">fb.com/luca.ges</a></p>
      <p><strong>twitter:</strong> <a target="_blank" href="https://twitter.com/lucagez">twitter.com/lucagez</a></p>
      <p><strong>P.IVA:</strong> 0234567890</p>
    </div>
  </section>
)