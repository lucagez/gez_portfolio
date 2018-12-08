import fly from './modules/birds.js';
import label from './modules/label.js';
import Hist from './modules/hist.js';
import 'normalize.css';

fly();
label();

const chart_data = [{
  value: 50,
  label: 'lol'
},{
  value: 30,
  label: 'lol'
},{
  value: 40,
  label: 'lol'
},{
  value: 70,
  label: 'lol'
},] 
const config = {
  data: chart_data,
  parent: '.work'
}

const chart = new Hist(config).make();