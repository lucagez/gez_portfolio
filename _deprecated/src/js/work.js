import label from './modules/work_label';

const gifs = require('../media/gif/*.gif');
const work_label = document.querySelector('.label');

document.querySelectorAll('.work').forEach(work => {
  const data = work.attributes.data.value;
  work.addEventListener('mousemove', (e) => {
    label(gifs[data], work_label, e);
    work.addEventListener('mouseout', () => work_label.style.display = 'none');
  });
});