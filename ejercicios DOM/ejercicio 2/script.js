//2.1
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

//2.2
const parentDiv = document.createElement('div');
const childP = document.createElement('p');

parentDiv.appendChild(childP);
document.body.appendChild(parentDiv);

//2.3
const loopDiv = document.createElement('div');

for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  loopDiv.appendChild(p);
}

document.body.appendChild(loopDiv);

//2.4
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinamico!';
document.body.appendChild(dynamicP);

//2.5
const title = document.querySelector('h2.fn-insert-here');
title.textContent = 'Wubba Lubba dub dub';

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement('ul');

apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});

document.body.appendChild(ul);

//2.7
const elementsToRemove = document.querySelectorAll('.fn-remove-me');

elementsToRemove.forEach(element => {
  element.remove();
});

//2.8
const middleP = document.createElement('p');
middleP.textContent = 'Voy en medio!';

const allDivs = document.querySelectorAll('div');
document.body.insertBefore(middleP, allDivs[1]);

//2.9
const targetDivs = document.querySelectorAll('div.fn-insert-here');

targetDivs.forEach(div => {
  const insideP = document.createElement('p');
  insideP.textContent = 'Voy dentro!';
  div.appendChild(insideP);
});