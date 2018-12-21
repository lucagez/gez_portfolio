import Hist from './hist.js';

export default () => {
  const front_end_listener = document.querySelector('.front-end');
  const chart_data = [];
  const data_listener = document.querySelector('.data-vis');
  for (let i = 0; i < 20; ++i) {
    chart_data.push(
      {
        value: Math.floor(Math.random() * 100),
        label: ''
      }
    );
  }
  const config = {
    data: chart_data,
    parent: '.work'
  }
  data_listener.addEventListener('mouseover', () => {
    const chart = new Hist(config).make();
    const chart_area = document.querySelector('.work');
    chart_area.querySelectorAll('.bar').forEach(bar => bar.style.height = '0');
    data_listener.addEventListener('mouseout', () => {
      chart_area.innerHTML = ''
    });
  });

  front_end_listener.addEventListener('mouseover', () => {
    const hypno = document.querySelector('#hypno');
    hypno.style.display = 'unset';
    front_end_listener.addEventListener('mouseout', () => hypno.style.display = 'none');
  })
}