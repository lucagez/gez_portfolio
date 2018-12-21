export default class Hist {
  constructor(props) {
    this.data = props.data || [];
    this.style = props.style || null;
    this.id = props.id || 1;
    this.parent = document.querySelector(props.parent || 'body');
    this.has_at_least_one_negative = this.data.map(v => v.value).some(v => v < 0);

    this.bar = this.bar.bind(this);
    this.make_tool = this.make_tool.bind(this);
  }
  make() {
    this.make_container();
    this.make_tool();
    this.has_at_least_one_negative ? this.has_negative() : null;
    this.data.map((val, index) => this.bar(val, index, false));
    // 'undicibarre'.split('').forEach((e, i) => this.horizontal_bar(i));
    this.fluid_params();
    this.update();
  }
  bar(val, index, log = false) {
    const b = document.createElement('div');
    const label = document.createElement('div');
    let style = val.style ? val.style : null;
    if (val.value < 0) {
      b.classList.add('negative-bar');
      label.classList.add('negative-label');
    } 
    b.classList.add(`bar`);
    b.classList.add(`bar-${index}`);
    b.style = style;
    label.classList.add(`label`);
    label.classList.add(`label-${index}`);
    label.innerText = val.label;
    b.appendChild(label);
    this.write_values(b, val.value, val.label);
    this.chart.appendChild(b);
    setTimeout(() => b.style.height = log ? `${Math.log(Math.abs(val.value))}%` : `${Math.abs(val.value)}%`, .1);
  }
  horizontal_bar(index) {
    const h = document.createElement('hr');
    h.classList.add('horizontal-bar');
    h.classList.add(`horizontal-bar-${index}`);
    h.style.top = `${index * 9.02}%`;
    this.chart_container.appendChild(h);
  }
  has_negative() {
    this.chart_container.style.gridTemplateAreas = '"chart""."';
  }
  write_values(el, value, label) {
    el.setAttribute('value', value);
    el.setAttribute('label', label);
  }
  make_container() {
    this.chart_container = document.createElement('div');
    this.chart = document.createElement('div');
    this.chart_container.classList.add('chart-container');
    this.chart.classList.add('chart', `grapho-${this.id}`);
    this.chart_container.appendChild(this.chart);
    this.parent.appendChild(this.chart_container);
  }
  make_tool() {
    this.tool = document.createElement('div');
    this.tool.classList.add('tool');
    this.chart_container.appendChild(this.tool);
    this.chart_container.addEventListener('mousemove', (e) => {
      const pos = this.tool.getBoundingClientRect();
      let x = e.clientX;
      let y = e.clientY + 20;
      (x > window.innerWidth / 2) ? x -= 70 : null;
      (y > window.innerHeight / 2) ? y -= 200 : null;
      this.tool.style = `
        top: ${y + 20}px;
        left: ${x}px;
        visibility: visible;
      `;
      (e.target.attributes['value']) ? this.tool.innerHTML = `
        <h1>${e.target.attributes['value'].value}</h1>
        <p>${e.target.attributes['label'].value}</p>
      `: this.tool.style = `visibility: hidden;`;
    })
  }
  update() {
    window.addEventListener('resize', () => this.fluid_params());
  }
  fluid_params() {
    const bars = this.chart.querySelectorAll('.bar');
    const labels = this.chart.querySelectorAll('.label');
    const dimensions = this.chart.getBoundingClientRect();
    const density = bars.length / dimensions.width * 1000;
    const size = (density > 35) ? {
      font: 11,
      margin: 2
    } : {
      font: 16,
      margin: 10
    };
    bars.forEach(e => e.style.fontSize = `${size.font}px`);
    labels.forEach(e => {
      const has_negative_class = e.classList.value.split(' ').indexOf('negative-label');
      console.log(has_negative_class);
      const style = (has_negative_class != -1) ? {
        translate: this.has_at_least_one_negative ? -dimensions.height + size.font - 25 : -25,
        rotate: 180
      } : {
        translate: this.has_at_least_one_negative ? dimensions.height + 25 : 25,
        rotate: 0
      };
      e.style.transform = `translateY(${style.translate}px) rotate(${style.rotate - 25}deg)`;
    });
    this.chart.style.gridColumnGap = `${size.margin}px`;
  }
}