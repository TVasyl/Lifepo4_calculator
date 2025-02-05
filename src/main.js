const minVoltage = 2.5;
const maxVoltage = 3.65;


//DOM elements
const cellsInp = document.getElementsByName('cell');
const percInp = document.querySelector('.charge-level__slider');
const but = document.querySelector('.button');

const output = document.querySelector(".charge-level__lable");

const batLevel = document.querySelector('.batery-level');
but.addEventListener('click', butHandler);


//Slider input handler
output.innerHTML = `${percInp.value}%`; 
percInp.oninput = function() {
  output.innerHTML = `${this.value}%`;
}


function butHandler(e) {
  e.preventDefault();
  let cell = radioButCheck(cellsInp);
  let perc = inpValueCheck(percInp);
  const voltage = voltageCount(cell, perc);
  render(voltage);
  renderBatLevel(perc);
}


function radioButCheck(element) {
  let res;
  element.forEach((item) => {if (item.type === 'radio' && item.checked) {
    res = item.value;
  }});
  
  return res;
}


function inpValueCheck(element) {
  const inpValue = element.value;
  
  return inpValue;
}


function voltageCount(cell, percent) {
  cell = Number(cell);
  percent = Number(percent);
  const sum = ((maxVoltage - minVoltage) / 100 * percent + minVoltage) * cell;
  
  return +sum.toFixed(2);;
}


function render(voltage) {
  const renderPlace = document.querySelector('.resalt');
  renderPlace.innerHTML = voltage + ' V';
}


function renderBatLevel(value) {
  let styleOfBat = `width: ${value}%`;
  batLevel.setAttribute('style', styleOfBat);
}

