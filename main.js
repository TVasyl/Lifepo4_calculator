const minVoltage = 2.5;
const maxVoltage = 3.65;

const cellsInp = document.getElementsByName('cell');
const percInp = document.querySelector('#level');
const but = document.querySelector('.button');

const batLevel = document.querySelector('.batery-level');

but.addEventListener('click', butHandler);



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
  
  return sum;
}


function render(voltage) {
  const renderPlace = document.querySelector('.resalt');
  renderPlace.innerHTML = voltage + ' V';
}


function renderBatLevel(value) {
  // let styleOfBat = 'width:' + value + '%';
  let styleOfBat = 'width:' + value + '%';
  batLevel.setAttribute('style', styleOfBat);
}

//console.log(voltageCount('8', '90'))
