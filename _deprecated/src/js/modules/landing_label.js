import me from '../../media/me.jpg';

export default () => {
  const label = document.querySelector('.label');
  const title = document.querySelector('.title');
  label.innerHTML = `
    <img src="${me}"/>
  `;
  title.addEventListener('mousemove', (e) => {
    label.style = `
      display: unset;
      transform: translate(${e.clientX + 80}px, ${e.clientY - 300}px);
    `;
    title.addEventListener('mouseout', () => label.style.display = 'none');
  });
}