export default (data, label, e) => {
  if (data) {
    label.innerHTML = `
      <img src="${data}" />
    `;
    label.style = `
      display: unset;
      top: 50%;
      transform: translateX(${e.clientX}px) translateY(-50%);
    `;
  }
}